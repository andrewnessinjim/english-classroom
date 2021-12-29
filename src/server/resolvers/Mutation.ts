import { login } from "../auth"
import { addPracticeText, updateRating, updateText } from "../pronunciation";


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

export default {
    login: loginResolver,
    updateRating: updateRatingResolver,
    updateText: updateTextResolver,
    addPracticeText: addPracticeTextResolver
}