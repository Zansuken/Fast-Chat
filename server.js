const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { request } = require("express");


dotenv.config({ path: ".env" });

const database = new MongoClient(process.env.DATABASE_URL);

const app = express();

app.set('trust proxy', 1)

const run = async () => {

    await database.connect();

    app.use(express.json())

    app.use(session({
        store: MongoStore.create({
            // mongoUrl: process.env.DATABASE_URL,
            ttl: 14 * 24 * 60 * 60,
            client: database
        }),
        secret: "Supercryptage",
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 14 * 24 * 60 * 60,
            sameSite: true,
        }

    }));


    app.post("/auth/login", async (request, response) => {

        const user = await database.db().collection("user").findOne({
            username: request.body.username,
            password: request.body.password
        })


        if (!user) return response.sendStatus(400);

        request.session.userId = user._id

        response.sendStatus(200)
    })


    app.post("/auth/logout", async (request, response) => {



        if (!request.session.userId) return response.sendStatus(400);

        request.session.userId = null

        response.sendStatus(200)
    })


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

    app.post("/chat", async (request, response) => {


        await database.db().collection("chat").insertOne({
            user: "",
            chatLine: request.body.chatLine
        })

        response.sendStatus(200)

    })

    app.get("/auth/already-logged", async (request, response) => {
        response.json(Boolean(request.session.userId))
    })

    app.use(express.static("public"))

    app.listen(process.env.PORT || 3000, () => {
    });

};

run();







