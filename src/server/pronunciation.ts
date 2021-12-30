import { ObjectId } from "mongodb";
import * as db from "./dao/db";

async function fetchPracticeTexts(studentId) {
    const eightHoursAgo = new Date().getTime() - (8 * 60 * 60 * 1000);
    const pronunciationDoc = await db.get().collection("pronunciation").findOne({
            studentId: new ObjectId(studentId)
        }, {
            projection: {
                "practiceTexts.text": 1,
                "practiceTexts._id": 1,
                "practiceTexts.rating" : {$slice: -1}}
        });
    if(!pronunciationDoc || !pronunciationDoc.practiceTexts) return [];
    pronunciationDoc.practiceTexts.forEach(practiceText => {
        practiceText.latestRating = 
            practiceText.rating && practiceText.rating[0].at.getTime() > eightHoursAgo? 
                practiceText.rating[0].value : null;
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
            $push: {practiceTexts: {_id: new ObjectId(), text}}
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
            $push: {"practiceTexts.$.rating": {value: newRating, at: new Date() }}
        });
    return true;
}

export {
    fetchPracticeTexts,
    updateText,
    addPracticeText,
    updateRating
}