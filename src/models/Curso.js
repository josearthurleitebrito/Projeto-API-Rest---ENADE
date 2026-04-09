const mongoose = require('mongoose');

// Definindo a estrutura (Schema) do Curso
const cursoSchema = new mongoose.Schema({
    nome_curso: {
        type: String,
        required: true // required significa que é obrigatório preencher
    },
    area_diretriz: {
        type: String,
        required: true
    },
    coordenador: {
        type: String,
        required: true
    },
    nota_enade_anterior: {
        type: Number,
        required: false // Opcional, pois pode ser um curso novo
    },
    ano_ultima_avaliacao: {
        type: Number,
        required: true
    }
}, {
    timestamps: true // Cria automaticamente os campos createdAt e updatedAt
});

// Exportando o modelo para usarmos nas rotas
module.exports = mongoose.model('Curso', cursoSchema);