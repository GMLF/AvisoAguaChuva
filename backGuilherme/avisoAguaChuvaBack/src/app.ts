import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { criaDoacaoControlador, lerdoacaoControler } from './controlador/doacao.controlador';
import { criarNecessitadosControlador, lerNecessitadosControler } from './controlador/necessitados.controlador';
import { criaCadastroControlador, lerdCadastroControler } from './controlador/cadastro.controlador';
import { alteraTabelaControlador, alteraTabelaDoacaoControlador } from './controlador/atualizacao.controlador';

const app = express();

//comando para criar migrations
// npm run typeorm migration:generate src/migration/CriaçãodaTabelaDoação_E_NecessitadosCriaçãoTabelaRegistro -- -d src/data-source
//comando para executar a migration
//npm run typeorm migration:run -- -d src/data-source
app.use(express.json());
app.use(cors());

//passando as rotas pras ações
app.post('/doacao',criaDoacaoControlador)
app.get('/doacao',lerdoacaoControler)

app.post('/cadastro',criaCadastroControlador)
app.get('/cadastro',lerdCadastroControler)

app.post('/necessitados',criarNecessitadosControlador)
app.get('/necessitados',lerNecessitadosControler)

app.put('/alteraStatusNecessitados',alteraTabelaControlador)
app.put('/alteraStatusDoacao',alteraTabelaDoacaoControlador)

app.get('/weather', async (req, res) => {
    try {
      const response = await axios.get('https://api.hgbrasil.com/weather', {
        params: req.query,
      });
  
      // Adicione outros cabeçalhos CORS, se necessário
      res.header('Access-Control-Allow-Origin', '*');
      res.json(response.data);
    } catch (error) {
      console.error('Erro na requisição à API externa:', error.message);
      res.status(500).json({ error: 'Erro na requisição à API externa' });
    }
  });
export {app}