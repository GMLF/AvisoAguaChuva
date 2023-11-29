const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Servir arquivos estáticos do diretório 'build' do frontend
app.use(express.static(path.join(__dirname, 'frontend/public')));

// Rota padrão para servir o frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
