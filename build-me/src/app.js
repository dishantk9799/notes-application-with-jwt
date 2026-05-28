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


export default app;