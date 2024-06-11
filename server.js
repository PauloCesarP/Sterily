require('dotenv').config();
const express = require('express');
const path = require('node:path');
const cors = require('cors');

const apiRoutes = require('./routes');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Servir os arquivos estáticos do React
app.use(express.static(path.join(__dirname, 'build')));

// Usar as rotas da API
app.use('/api', apiRoutes);

// Todas as outras requisições redirecionam para o index.html do React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});