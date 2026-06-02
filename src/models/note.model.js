const mongoose = require('mongoose');

// Define the blueprint (Schema) for a Note
// MongoDB will automatically generate a unique _id for every entry
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
});

// Compile the schema into a model
// 'note' will automatically become 'notes' (plural) in the MongoDB collection
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;