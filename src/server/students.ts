import { ObjectId } from "mongodb";
import * as db from "./dao/db";

async function fetchStudents(teacherId, user) {
    if(!user || !user._id || user._id.toString() !== teacherId) {
        throw new Error("Not authorized");
    }
    const students = await db.get().collection("students").find({teacherId: new ObjectId(teacherId)});
    return students.toArray();
}

export {
    fetchStudents
}