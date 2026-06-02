const express = require('express');
const noteModel = require("./models/note.model");

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

/**
 * @route   POST /notes
 * @desc    Create a new note and save it to MongoDB
 */
app.post("/notes", async (req, res) => {
    const data = req.body;
    
    // .create() builds the document and saves it to the database instantly
    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({ message: "Note created successfully in database" });
});

/**
 * @route   GET /notes
 * @desc    Retrieve all notes from MongoDB
 */
app.get("/notes", async (req, res) => {
    // .find() with an empty object {} returns everything in the collection
    const notes = await noteModel.find({});

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });
});

/**
 * @route   DELETE /notes/:id
 * @desc    Delete a specific note by its MongoDB _id
 */
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    // Target the specific document using the auto-generated _id and remove it
    await noteModel.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Note deleted successfully" });
});

/**
 * @route   PATCH /notes/:id
 * @desc    Partially update a note's description by its MongoDB _id
 */
app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;

    // Target by _id, then pass the specific fields to update
    await noteModel.findOneAndUpdate({ _id: id }, { description: description });

    res.status(200).json({ message: "Note updated successfully" });
});

module.exports = app;