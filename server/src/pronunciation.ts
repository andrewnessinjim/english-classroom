import { ObjectId } from "mongodb";
import * as db from "./dao/db";

async function fetchPracticeTexts(studentId) {
    const pronunciationDoc = await db.get().collection("pronunciation").findOne({
            studentId: new ObjectId(studentId)
        }, {
            projection: {
                "practiceTexts.text": 1,
                "practiceTexts._id": 1,
                "practiceTexts.latestRating" : 1}
        });
    if(!pronunciationDoc || !pronunciationDoc.practiceTexts) return [];
    pronunciationDoc.practiceTexts.forEach(practiceText => {
        practiceText.latestRating = practiceText.latestRating? practiceText.latestRating.value : 0;
    });
    return pronunciationDoc && pronunciationDoc.practiceTexts? pronunciationDoc.practiceTexts : [];
}

async function fetchProgress(teacherId, studentId) {
    const pronunciationDoc = await db.get().collection("pronunciation").findOne({
        teacherId: new ObjectId(teacherId),
        studentId: new ObjectId(studentId)
    }, {
        projection: {
            averageHistory: 1
        }
    });

    return pronunciationDoc && pronunciationDoc.averageHistory.map(item => {
        item.lastActive = item.lastActive.toDateString();
        return item;
    });
}

async function updateText(teacherId, studentId, practiceTextId, newText){
    await db.get().collection("pronunciation").updateOne(
        {
            studentId: new ObjectId(studentId),
            teacherId: new ObjectId(teacherId),
            "practiceTexts._id": new ObjectId(practiceTextId)
        },
        {
            $set: {"practiceTexts.$.text":newText}
        });
    return true;
}

async function addPracticeText(teacherId, studentId, text){
    await db.get().collection("pronunciation").updateOne(
        {
            studentId: new ObjectId(studentId),
            teacherId: new ObjectId(teacherId)
        }, {
            $push: {practiceTexts: {_id: new ObjectId(), text}},
            $set: {lastActive: new Date()}
        },{
            upsert: true
        }
    )
}

async function updateRating(teacherId, studentId, practiceTextId, newRating){
    const updatedDoc = await db.get().collection("pronunciation").findOneAndUpdate(
        {
            studentId: new ObjectId(studentId),
            teacherId: new ObjectId(teacherId),
            "practiceTexts._id": new ObjectId(practiceTextId)
        },
        {
            $set: {
                "practiceTexts.$.latestRating": {value: newRating, at: new Date() },
                lastActive : new Date()
            }
        }, {
            returnDocument: "after"
        });
    
    const updatedPracticeText = updatedDoc.value.practiceTexts.find(practiceText => practiceText._id.valueOf() == practiceTextId)
    updatedPracticeText.latestRating = updatedPracticeText.latestRating.value;
    return updatedPracticeText;
}

async function calculateAndSaveAverage(teacherId, studentId) {
    console.log("Calculating average");
    const avgCalcPipeline = [
        {
          '$match': {
            'teacherId': new ObjectId(teacherId),
            'studentId': new ObjectId(studentId)
          }
        }, {
          '$unwind': {
            'path': '$practiceTexts', 
            'includeArrayIndex': 'string', 
            'preserveNullAndEmptyArrays': false
          }
        }, {
          '$project': {
            'practiceTexts': 1, 
            'lastActive': 1
          }
        }, {
          '$match': {
            'practiceTexts.latestRating.value': {
              '$gt': 0
            }
          }
        }, {
          '$group': {
            '_id': {
              '_id': '$_id', 
              'lastActive': '$lastActive'
            }, 
            'average': {
              '$avg': '$practiceTexts.latestRating.value'
            }, 
            'totalPracticed': {
              '$sum': 1
            }
          }
        }
      ];

    const avgResult = await db.get().collection("pronunciation").aggregate(avgCalcPipeline)
    const result = await avgResult.toArray();
    console.log(result[0]);

    const totalPracticed = result[0] && result[0].totalPracticed;

    if(totalPracticed && totalPracticed > 0) {
        console.log(`${totalPracticed} words found to be practiced, saving history`);
        db.get().collection("pronunciation").updateOne({
            'teacherId': new ObjectId(teacherId),
            'studentId': new ObjectId(studentId)
        }, [{
                $set: {
                    averageHistory: {
                        $concatArrays: [
                            {$ifNull: ["$averageHistory", []]},
                            [{
                                lastActive: result[0]._id.lastActive,
                                average: result[0].average,
                                totalPracticed: result[0].totalPracticed
                            }]
                        ]
                    },
                    practiceTexts: {
                        $map: {
                            input: "$practiceTexts",
                            as: "pt",
                            in: {
                                _id: "$$pt._id",
                                text: "$$pt.text",
                                ratingHistory: {
                                    $concatArrays: [
                                        {$ifNull: ["$$pt.ratingHistory", []]},
                                        ["$$pt.latestRating"]
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        ]);
    } else {
        console.log("No pronunciation activity found");
    }
    
    return true;
}

export {
    fetchPracticeTexts,
    updateText,
    addPracticeText,
    updateRating,
    calculateAndSaveAverage,
    fetchProgress
}