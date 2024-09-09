const produto = require('./produto');

function adicionarProduto(req, res) {
console.log(req.body);
const novoProduto = {
    id:produto.lenght + 1,
    nome: req.body.titulo
};
produto.push(novoProduto)
res.status(201)
res.send({message: 'Produto criado com sucesso!', produto: novoProduto});
}

module.exports = adicionarProduto;