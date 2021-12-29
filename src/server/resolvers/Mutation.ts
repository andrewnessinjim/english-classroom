import { login } from "../auth"


function loginResolver(parent, args, context, info) {
    return login(args.username,args.password);
}

export default {
    login: loginResolver
}