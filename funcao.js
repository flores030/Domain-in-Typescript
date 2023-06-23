// Entidade Produto
var Produto = /** @class */ (function () {
    function Produto(nome, tamanho, cor) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.cor = cor;
    }
    return Produto;
}());
// Entidade Estoque
var Estoque = /** @class */ (function () {
    function Estoque() {
        this.produtos = [];
    }
    Estoque.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Estoque.prototype.removerProduto = function (produto) {
        var index = this.produtos.indexOf(produto);
        if (index > -1) {
            this.produtos.splice(index, 1);
        }
    };
    return Estoque;
}());
