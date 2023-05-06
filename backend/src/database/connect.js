const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect
        (`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@notpad.6ji3i66.mongodb.net/?retryWrites=true&w=majority`);

        console.log('Conexão ao banco de dados realizada com sucesso');
    } catch (error) {
        console.log(`Erro ao se conectar ao banco de dados: ${error}`);
    }
};

module.exports = connectToDatabase;