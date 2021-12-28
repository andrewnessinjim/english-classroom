import * as db from "../dao/db";
import bcrypt from "bcrypt";

async function login(username, password) {
    const userDoc = await db.get().collection("users").findOne({username});
    if(!userDoc) {
        throw new Error("User does not exist in DB");
    }

    if(!await bcrypt.compare(password, userDoc.password)) {
        throw new Error("Password is incorrect");
    }

    return {
        token: `a token for ${username}`,
        user: {
            id: userDoc._id.toString(),
            username: userDoc.username,
            role: userDoc.role
        }
    }
}

export {
    login
}