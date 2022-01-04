import { fetchPracticeTexts, fetchProgress } from "../pronunciation";
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

async function fetchProgressResolver(parent, args, context, info) {
    return await fetchProgress(args.teacherId, args.studentId);
}

export default {
    fetchStudents: fetchStudentsResolver,
    fetchPracticeTexts: fetchPracticeTextsResolver,
    fetchStudent: fetchStudentResolver,
    fetchProgress: fetchProgressResolver
}