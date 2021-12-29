import { ObjectId } from "mongodb";
import * as db from "./dao/db";

async function fetchPracticeTexts(studentId) {
    const pronunciationDoc = await db.get().collection("pronunciation").findOne({studentId: new ObjectId(studentId)});
    return pronunciationDoc.practiceTexts;
}

export {
    fetchPracticeTexts
}