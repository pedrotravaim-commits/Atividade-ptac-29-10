const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


const produtos = [
  { _id: '65f1a2b3c4d5e6f7a8b9c0d1', nome: 'Caneta', preco: 3.5, ativo: true },
  { _id: '65f1a2b3c4d5e6f7a8b9c0d2', nome: 'Caderno', preco: 18.9 },
  { _id: '65f1a2b3c4d5e6f7a8b9c0d3', nome: 'Lápis', preco: 1.2, tags: ['papelaria', 'escola'] },
  {
    _id: '65f1a2b3c4d5e6f7a8b9c0d4',
    nome: 'Café',
    preco: 12.5,
    tags: ['quente', 'manhã'],
    fornecedor: { nome: 'CoopeCafé', cidade: 'Dourados' },
  },
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});