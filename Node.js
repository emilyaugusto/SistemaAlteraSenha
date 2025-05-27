// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

let ultimaSenha = '';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/senha', (req, res) => {
  const { senha } = req.body;
  if (!senha) {
    return res.status(400).send('Senha não fornecida');
  }
  ultimaSenha = senha;
  console.log(`Senha recebida: ${senha}`);
  res.sendStatus(200);
});

app.get('/senha', (req, res) => {
  res.send(`<p>${ultimaSenha}</p>`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
