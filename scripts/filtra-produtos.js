function atualizouFiltro(){

    var filtro = document.querySelector("#bolos-doces");
    var produtos = document.querySelectorAll(".produto");

    var valorFiltro = filtro.options[filtro.selectedIndex].value;
    console.log(valorFiltro);

    for (let i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var classProdutos = produto.classList;

        console.log(classProdutos[classProdutos.length - 1]);
        
        produto.classList.remove("hide");

        if(!(valorFiltro == classProdutos[classProdutos.length - 1]) && !(valorFiltro == classProdutos[classProdutos.length - 2])){
            produto.classList.add("hide");
        } 
        if (valorFiltro == "todos") {
            produto.classList.remove("hide");
        }
    }
}

atualizouFiltro();