const produto = require('./produto');


const listarProduto = (req, res) => {
    res.status(200).send(produto)
};





module.exports = listarProduto