import { ObjectId } from "mongodb";
import * as db from "./dao/db";

async function fetchPracticeTexts(studentId) {
    const pronunciationDoc = await db.get().collection("pronunciation").findOne({studentId: new ObjectId(studentId)});
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
            $set: {"practiceTexts.$.latestRating":newRating}
        });
    return true;
}

export {
    fetchPracticeTexts,
    updateText,
    addPracticeText,
    updateRating
}