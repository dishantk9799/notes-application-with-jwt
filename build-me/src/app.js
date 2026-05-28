import express from 'express';
import { Note } from './models/note.model.js';

const app = express();
app.use(express.json());


// ---- Create note ----
app.post('/api/notes', async (req, res) => {
    try {

        // ---- User provided data ----
        const { title, description } = req.body;

        const token = req.cookies.token;
        const user = jwt.verify(token, process.env.JWT_SECRET);

        // ---- Validation ----
        if (!title) return res.status(400).json({ message: "title is required" });
        if (!description) return res.status(400).json({ message: "description is required" });
        if (title.trim().length < 3) return res.status(400).json({ message: "title should be more then 3 character" });
        if (description.trim().length < 10) return res.status(400).json({ message: "description should be more then 10 character" });

        // ---- Creating note ----
        const newNote = await Note.create({ title, description });

        return res.status(201).json({
            message: "Note created successfully",
            note: newNote
        });

    } catch (error) {
        console.log("Error in Create note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// ---- Read note ----
app.get('/api/notes', async (req, res) => {
    try {
        // ---- Find all note from the database ----
        const note = await Note.find();

        return res.status(200).json({ note });

    } catch (error) {
        console.log("Error in Read note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

// ---- Update note ----
app.patch('/api/notes/:id', async (req, res) => {
    try {

        // ---- User provided data ----
        const { id } = req.params;
        const { description } = req.body;

        // ---- Find user in database
        const note = await Note.findById(id);

        // ---- Validation ----
        if (!note) return res.status(404).json({ message: "Note not found" });
        if (!description) return res.status(400).json({ message: "description is required" });
        if (description.trim().length < 10) return res.status(400).json({ message: "description should be more then 10 character" });

        // Updating user in database
        note.description = description;
        await note.save();

        return res.status(200).json({
            message: "Note update successfully",
            note
        });

    } catch (error) {
        console.log("Error in Update note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});



export default app;