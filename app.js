const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const adicionarProduto = require('./adicionarProduto')
const listarProduto = require('./listarProduto')
const atualizarProduto = require('./atualizarProduto')
const removerProduto = require('./removerProduto')


app.post('/adicionar',adicionarProduto);
app.get('/listar', listarProduto);
app.put('/atualizar', atualizarProduto);
app.delete('/remover/:id', removerProduto);

app.get('/', (req, res) => {
res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:3000$
{port}`);
});