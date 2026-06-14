import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import filmeRoutes from './src/routes/filmeRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (request, response) => {
  response.status(200).json({
    status: true,
    message: 'API UniFECAF Flix em funcionamento',
    version: '1.0.0',
    endpoints: [
      'GET /v1/controle-filmes/filme',
      'GET /v1/controle-filmes/filme/:id',
      'GET /v1/controle-filmes/filtro/filme?nome=termo'
    ]
  });
});

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/v1/controle-filmes', filmeRoutes);

app.use((request, response) => {
  response.status(404).json({
    status: false,
    message: 'Rota não encontrada.'
  });
});

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({
    status: false,
    message: 'Erro interno no servidor.',
    details: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`API UniFECAF Flix rodando em http://localhost:${PORT}`);
});
