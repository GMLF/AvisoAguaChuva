import express from 'express';
import cors from 'cors';
import { criaDoacaoControlador, lerdoacaoControler } from './controlador/doacao.controlador';
import { criarNecessitadosControlador, lerNecessitadosControler } from './controlador/necessitados.controlador';
import { criaCadastroControlador, lerdCadastroControler } from './controlador/cadastro.controlador';

const app = express();

//comando para criar migrations
// npm run typeorm migration:generate src/migration/CriaçãodaTabelaAjuda -- -d src/data-source
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
export {app}