// Entidade Produto
class Produto {
    constructor(public nome: string, public tamanho: string, public cor: string) {}
  }
  
  // Entidade Estoque
  class Estoque {
    private produtos: Produto[];
  
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto: Produto): void {
      this.produtos.push(produto);
    }
  
    removerProduto(produto: Produto): void {
      const index = this.produtos.indexOf(produto);
      if (index > -1) {
        this.produtos.splice(index, 1);
      }
    }
  }
  