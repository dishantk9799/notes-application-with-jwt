import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: String
});

export const Note = mongoose.model("Note", noteSchema);
