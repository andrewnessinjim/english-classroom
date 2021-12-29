import * as db from "../dao/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(username, password) {
    const userDoc = await db.get().collection("users").findOne({username});
    if(!userDoc) {
        throw new Error("User does not exist");
    }

    if(!await bcrypt.compare(password, userDoc.password)) {
        throw new Error("Password is incorrect");
    }

    const user = {
        id: userDoc._id.toString(),
        username: userDoc.username,
        role: userDoc.role
    };

    return {
        token: jwt.sign(user, process.env.JWT_PRIVATE_KEY),
        user
    }
}

export {
    login
}