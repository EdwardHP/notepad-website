// Cors
const cors = require('cors');
// Express
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

// Configurando para usar o dotenv
const dotenv = require('dotenv');
dotenv.config();

// Conecta ao banco de dados
const connectToDatabase = require('./src/database/connect');
connectToDatabase();

// Rotas
// Cria um bloco de notas no banco de dados
const NotepadModel = require('./src/models/notepadModel');
app.post('/notepad', async (req, res) => {
    try {
        const notepad = await NotepadModel.create(req.body);
        res.status('201').json(notepad);
    } catch (error) {
        return res.status('500').send(error.message);
    }
});

// Encontra todos os blocos de notas do banco de dados
app.get('/notepad', async (req, res) => {
    try {
        const notepads = await NotepadModel.find({});
        res.status('200').json(notepads);
    } catch (error) {
        return res.status('500').send(error.message);
    }
});

// Encontra bloco de notas com o mesmo titulo
app.get('/notepad/title/:title', async (req, res) => {
    const titleName = req.params.title;

    try {
        const notepads = await NotepadModel.find({ title: titleName });
        res.status('200').json(notepads);
    } catch (error) {
        res.status('500').send(error.message);
    }
});

// Encronta um bloco de notas por id
app.get('/notepad/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const notepad = await NotepadModel.findById(id);
        res.status('200').json(notepad);
    } catch (error) {
        res.status('500').send(error.message);
    }
});

// Deleta um bloco de notas por id
app.delete('/notepad/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedNotepad = await NotepadModel.findByIdAndDelete(id);
        res.status('200').json(deletedNotepad);
    } catch (error) {
        res.status('500').send(error.message);
    }
});

// Encontra um bloco de notas por id e modifica pelo body
app.patch('/notepad/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateNotepad = await NotepadModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status('200').json(updateNotepad);
    } catch (error) {
        res.status('500').send(error.message);
    }
});

app.listen(3000, () => console.log('Servidor inicializado'));