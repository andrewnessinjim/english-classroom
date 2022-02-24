import { login } from "../auth"
import { addPracticeText, calculateAndSaveAverage as calcAverage, updateRating, updateText } from "../pronunciation";
import { addStudent } from "../students";


function loginResolver(parent, args, context, info) {
    return login(args.username,args.password);
}

function updateRatingResolver(parent, args, context, info) {
    updateRating(args.teacherId, args.studentId, args.practiceTextId, args.newRating);

    return {
        _id: args.practiceTextId,
        latestRating: args.newRating
    }
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

function calcAverageResolver(parent, args, context, info) {
    return calcAverage(args.teacherId, args.studentId);
}

export default {
    login: loginResolver,
    updateRating: updateRatingResolver,
    updateText: updateTextResolver,
    addPracticeText: addPracticeTextResolver,
    addStudent: addStudentResolver,
    calcAverage: calcAverageResolver
}