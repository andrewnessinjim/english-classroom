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

appDb.users.insertOne({
    username: "teacher",
    password: "$2b$10$3eo9yMuJVYrsW06Bz24sJuojl0eQMBymZNuPtfwFr5r6Ap7ZJJzfq",
    role: "teacher"
});