const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { request, response } = require("express");


dotenv.config({ path: ".env" });

const database = new MongoClient(process.env.DATABASE_URL);

const app = express();

app.set('trust proxy', 1)

const run = async () => {

    await database.connect();

    app.use(express.json())

    app.use(session({
        store: MongoStore.create({
            ttl: 14 * 24 * 60 * 60,
            client: database
        }),
        secret: "Supercryptage",
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 14 * 24 * 60 * 60,
            sameSite: true
        }

    }));


    app.post("/auth/login", async (request, response) => {

        const user = await database.db().collection("user").findOne({
            username: request.body.username,
            password: request.body.password
        })


        if (!user) return response.sendStatus(400);

        delete user.password

        request.session.user = user

        response.json(user)
    })


    app.post("/auth/logout", async (request, response) => {



        if (!request.session.user) return response.sendStatus(400);

        request.session.user = null

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

        if (!request.session.user) return response.sendStatus(401);

        if (!request.body.chatLine) {
            return response.sendStatus(400)
        }

        const newMessage = await database.db().collection("chat").insertOne({
            user: request.session.user,
            chatLine: request.body.chatLine,
            sendAt: new Date()
        })

        const message = await database.db().collection("chat").findOne({
            _id: newMessage.insertedId
        })

        const date = new Date(message.sendAt).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })
        const hour = new Date(message.sendAt).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })

        response.json({ user: message.user?.username ?? null, chatLine: message.chatLine, sendAt: hour + ", " + date })

    })

    app.get("/chat", async (request, response) => {

        const allChat = await database.db().collection("chat").find().toArray()


        const newChatAppareance = allChat.map((chat) => {

            const date = new Date(chat.sendAt).toLocaleDateString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric' })
            const hour = new Date(chat.sendAt).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric' })

            return { user: chat.user?.username ?? null, chatLine: chat.chatLine, sendAt: hour + ", " + date }
        })

        response.json(newChatAppareance.length >= 100 ? newChatAppareance.slice(0, 100) : newChatAppareance)

    })

    app.get("/auth/already-logged", async (request, response) => {
        response.json(request.session.user ?? null)
    })


    app.use(express.static("public"))

    app.listen(process.env.PORT || 3000, () => {
    });

};

run();







