// ===============================
// CARRINHO — UrbanFit
// ===============================

// Puxa carrinho salvo (ou inicia vazio)
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Salva no localStorage
function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Adiciona produto
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    salvarCarrinho();
    alert("Produto adicionado ao carrinho!");
}

// Remove pelo índice
function removerItem(index) {
    carrinho.splice(index, 1);
    salvarCarrinho();
    carregarCarrinho();
}

// Limpa tudo
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    carregarCarrinho();
}

// Carrega na página cart.html
function carregarCarrinho() {
    const lista = document.getElementById("lista-carrinho");
    const totalDisplay = document.getElementById("total");

    if (!lista) return; // evita erro em outras páginas

    lista.innerHTML = "";

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>O carrinho está vazio.</p>";
        totalDisplay.innerText = "";
        return;
    }

    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        lista.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.imagem}" alt="${item.nome}" width="100">
                <h4>${item.nome}</h4>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    totalDisplay.innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Se estiver na página do carrinho:
if (document.getElementById("limpar-carrinho")) {
    document.getElementById("limpar-carrinho").addEventListener("click", limparCarrinho);
    carregarCarrinho();
}

// Exporta função para ser usada no produto.html
window.adicionarAoCarrinho = adicionarAoCarrinho;
