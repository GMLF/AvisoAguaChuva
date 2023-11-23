const express = require('express');
const path = require('path');
const axios = require('axios'); // Certifique-se de instalar isso com 'npm install axios'
const cors = require('cors'); // Importe o módulo CORS


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Servir arquivos estáticos do diretório 'build' do frontend
app.use(express.static(path.join(__dirname, '../frontend/src')));

// Rota padrão para servir o frontend
app.get('/auth', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src', 'index.js'));
});

app.get('/clima', async (req, res) => {
  try {
    const response = await axios.get('http://api.weatherstack.com/current?access_key=50cb49b38e309d0f5f89b67feb0a17e8&query=Apucarana');
    const dadosClima = response.data;
    res.json(dadosClima);
  } catch (error) {
    console.error('Erro ao solicitar a API do Weatherstack:', error);
    res.status(500).json({ erro: 'Erro ao obter dados do clima' });
  }
});
// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
