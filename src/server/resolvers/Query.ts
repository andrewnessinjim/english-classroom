import { fetchPracticeTexts } from "../pronunciation";
import { fetchStudents } from "../students";

async function fetchStudentsResolver(parent, args, context, info) {
    return await fetchStudents(args.teacherId, context.user);
}

async function fetchPracticeTextsResolver(parent, args, context, info) {
    return await fetchPracticeTexts(args.studentId);
}

export default {
    fetchStudents: fetchStudentsResolver,
    fetchPracticeTexts: fetchPracticeTextsResolver
}