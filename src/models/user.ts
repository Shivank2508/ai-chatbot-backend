// Models: Models contain all the schemas of the database, like which kind of input will be received 
//         from client - side and server - side validations.This will contain all files of validations 
//         and data schemas that should exist.

import mongoose from "mongoose";
import { randomUUID } from "crypto";

const chatbotSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID()
    },
    role: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true,
    },
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        reqired: true,
    },
    chat: [chatbotSchema],
})

export default mongoose.model("User", userSchema);