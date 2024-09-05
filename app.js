const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const adicionarAluguel = require('./adicionarAluguel')
const listarAluguel = require('./listarAluguel')
const atualizarAluguel = require('./atualizarAluguel')
const removerAluguel = require('./removerAluguel')


app.post('/adicionar',adicionarAluguel);
app.get('/listar', listarAluguel);
app.put('./atualizar', atualizarAluguel);
app.delete('./remover', removerAluguel);

app.get('/', (req, res) => {
res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:3000$
{port}`);
});