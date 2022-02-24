import { fetchPracticeTexts, fetchProgress } from "../pronunciation";
import { fetchStudent, fetchStudents } from "../students";

async function studentsResolver(parent, args, context, info) {
    return await fetchStudents(args.teacherId, context.user);
}

async function practiceTextsResolver(parent, args, context, info) {
    return await fetchPracticeTexts(args.studentId);
}

async function studentResolver(parent, args, context, info) {
    return await fetchStudent(args.studentId);
}

async function progressResolver(parent, args, context, info) {
    return await fetchProgress(args.teacherId, args.studentId);
}

export default {
    students: studentsResolver,
    practiceTexts: practiceTextsResolver,
    student: studentResolver,
    progress: progressResolver
}