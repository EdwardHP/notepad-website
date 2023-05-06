const mongoose = require('mongoose');

const notepadSkema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const NotepadModel = mongoose.model("Notepad", notepadSkema);

module.exports = NotepadModel;