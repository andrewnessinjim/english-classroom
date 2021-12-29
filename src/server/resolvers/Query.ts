import { fetchStudents } from "../students";

async function fetchStudentsResolver(parent, args, context, info) {
    return await fetchStudents(args.teacherId, context.user);
}

export default {
    fetchStudents: fetchStudentsResolver
}