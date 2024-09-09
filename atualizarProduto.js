let produto = require('./produto');

const atualizarProduto = (req, res) => {
const {id} = req.params;
const novoProduto = req.body.produto;

let index = produto.findIndex(produto => produto.id == id);
if (!index) {
    return res.status(404).send({message: 'Nada foi atualizado'});
}

produto[index] = novoProduto;
res.status(200).send({
message:'   Produto atualizado com sucesso',
produto: novoProduto
});
}

module.exports = atualizarProduto