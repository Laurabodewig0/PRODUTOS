const produto = require('./produto')

const removerProduto = (req, res) => {
    const{id} = req.params;

    let index = produto.findIndex(produto => produto.id == id);

    if(index === -1) {
        return res.status(404).send('Nada encontrado');
    }

    const produtoRemovido = produto.splice(index, 1)[0];

res.status(200).send({
message:'produto deletado',
produto: produtoRemovido
})
}


module.exports = removerProduto