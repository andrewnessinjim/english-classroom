import { login } from "../auth"
import { addPracticeText, calculateAndSaveAverage, updateRating, updateText } from "../pronunciation";
import { addStudent } from "../students";


function loginResolver(parent, args, context, info) {
    return login(args.username,args.password);
}

function updateRatingResolver(parent, args, context, info) {
    return updateRating(args.teacherId, args.studentId, args.practiceTextId, args.newRating);
}

function updateTextResolver(parent, args, context, info) {
    return updateText(args.teacherId, args.studentId, args.practiceTextId, args.newText);
}

function addPracticeTextResolver(parent, args, context, info) {
    return addPracticeText(args.teacherId, args.studentId, args.text);
}

function addStudentResolver(parent, args, context, info) {
    return addStudent(args.studentName, args.teacherId);
}

function calculateAndSaveAverageResolver(parent, args, context, info) {
    return calculateAndSaveAverage(args.teacherId, args.studentId);
}

export default {
    login: loginResolver,
    updateRating: updateRatingResolver,
    updateText: updateTextResolver,
    addPracticeText: addPracticeTextResolver,
    addStudent: addStudentResolver,
    calculateAndSaveAverage: calculateAndSaveAverageResolver
}