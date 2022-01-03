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
    await db.get().collection("pronunciation").updateOne(
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
        });
    return true;
}

export {
    fetchPracticeTexts,
    updateText,
    addPracticeText,
    updateRating
}