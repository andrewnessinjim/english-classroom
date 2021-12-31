let DB_NAMESPACE = "englishClassroom";
db.createUser(
    {
        user: "english-classroom-user",
        pwd: "english-classroom-pass",
        roles: [
            {
                role: "readWrite",
                db: DB_NAMESPACE
            }
        ]
    }
)

db.auth("english-classroom-user", "english-classroom-pass");
let appDb = db.getSiblingDB(DB_NAMESPACE);