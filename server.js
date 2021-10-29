const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env" });

const database = new MongoClient(process.env.DATABASE_URL);

const app = express();

// app.get("/", (request, response) => {
//     response.send("Hello");
// })

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Server started");
});



const run = async () => {

    await database.connect();

    // console.log("Server started");

    // database.db().collection("user").insertOne({
    //     username: "test123",
    //     password: "test123"
    // })


    // const users = await database.db().collection("user").find().toArray();

    // const updateUser = await database.db().collection("user").findOneAndUpdate({ username: "test123" }, { $set: { username: "Ghostwake" } });

    // const deleteUser = await database.db().collection("user").findOneAndDelete({ username: "Ghostwake" });


};

// run();