const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");
const { response, request } = require("express");

dotenv.config({ path: ".env" });

const database = new MongoClient(process.env.DATABASE_URL);

const app = express();
app.use(express.json())

// app.get("/", (request, response) => {
//     response.send("Hello");
// })

app.post("/auth/login", async (request, response) => {

    const user = await database.db().collection("user").findOne({
        username: request.body.username
    })

    if (user) return console.log("Username already taken!");

})

app.use(express.static("public"))



app.post("/register", async (request, response) => {

    const user = await database.db().collection("user").findOne({
        username: request.body.username
    })

    if (user) return response.sendStatus(400);

    await database.db().collection("user").insertOne({
        username: request.body.username,
        password: request.body.password
    })

    response.sendStatus(200)

})


const run = async () => {

    await database.connect();

    // console.log("Server started");






    // const users = await database.db().collection("user").find().toArray();

    // const updateUser = await database.db().collection("user").findOneAndUpdate({ username: "test123" }, { $set: { username: "Ghostwake" } });

    // const deleteUser = await database.db().collection("user").findOneAndDelete({ username: "Ghostwake" });

    app.listen(process.env.PORT || 3000, () => {
        console.log("Server started");
    });

};

run();