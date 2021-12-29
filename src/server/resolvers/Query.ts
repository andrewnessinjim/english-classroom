import { fetchPracticeTexts } from "../pronunciation";
import { fetchStudent, fetchStudents } from "../students";

async function fetchStudentsResolver(parent, args, context, info) {
    return await fetchStudents(args.teacherId, context.user);
}

async function fetchPracticeTextsResolver(parent, args, context, info) {
    return await fetchPracticeTexts(args.studentId);
}

async function fetchStudentResolver(parent, args, context, info) {
    return await fetchStudent(args.studentId);
}

export default {
    fetchStudents: fetchStudentsResolver,
    fetchPracticeTexts: fetchPracticeTextsResolver,
    fetchStudent: fetchStudentResolver
}