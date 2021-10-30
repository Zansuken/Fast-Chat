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

app.post("/auth/login", (request, response) => {
    console.log(request.body);
    response.send("Ok");
})

app.use(express.static("public"))



app.post("/register", async (request, response) => {
    console.log(request.body);
    response.send("data collected")



    const user = await database.db().collection("user").findOne({
        username: request.body.username
    })

    if (user) return console.log("Username already taken!");

    await database.db().collection("user").insertOne({
        username: request.body.username,
        password: request.body.password
    })
    console.log("User registered");
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