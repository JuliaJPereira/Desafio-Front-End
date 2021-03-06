let url =
  "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

function buscaProdutos() {
  axios.get(url).then((response) => {
    url = `https://${response.data.nextPage}`
    let containerProdutos = document.getElementById("container-itens-produtos");

    response.data.products.forEach((produto) => {
      containerProdutos.innerHTML += `
            <div class="produto">
                <img
                    src="${produto.image}"
                    alt=""
                />
                <p class="nome">${produto.name}</p>
                <p class="descricao">
                    ${produto.description}
                </p>
                <p class="de">De: ${produto.oldPrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
                <p class="por">Por: ${produto.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
                <p class="parcelado">ou ${
                  produto.installments.count
                }x de ${produto.installments.value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}</p>
                <button class="botao-comprar-produto botao-hover">Comprar</button>
            </div>
        `;
    });
  });
}

buscaProdutos();
