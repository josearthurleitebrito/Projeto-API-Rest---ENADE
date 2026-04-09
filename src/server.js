const express = require('express');

const app = express();
const PORT = 3000;

// Middleware para permitir que a API entenda requisições no formato JSON
app.use(express.json());

// Rota de teste simples
app.get('/', (req, res) => {
    res.json({ mensagem: 'API do ENADE rodando com sucesso!' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});