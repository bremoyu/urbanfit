// Catálogo simples – pode ser expandido futuramente
console.log("Página de catálogo carregada.");

// 1. Lê a coleção da URL
const params = new URLSearchParams(window.location.search);
const colecao = params.get("colecao");

// 2. Estrutura dos produtos
const produtos = {
    calcas: [
        { nome: "Calça Street Preta", preco: 129.90, img: "images/calça-street.jpg" },
        { nome: "Calça Street Cinza", preco: 129.90, img: "images/calca-street2-cinza.jpeg" },
        { nome: "Calça Cargo Preta", preco: 149.90, img: "images/calca-street3-preta.jpeg" },
        { nome: "Calça Cargo Marrom", preco: 149.90, img: "images/calca-street4-marrom.jpeg" }
    ],

    ecostreet: [
        { nome: "Camiseta Eco Preta", preco: 39.90, img: "images/camisa-estampada-urbanfit-1-preta.jpg" },
        { nome: "Camiseta Eco Branca", preco: 39.90, img: "images/camisa-estampada-urbanfit-2-branca.jpg" },
        { nome: "Camiseta Eco Preta C/Estampa Caveira", preco: 45.90, img: "images/camisa-estampada-urbanfit-3-preta-caveira.jpg" }
    ],

    tenis: [
        { nome: "Tênis Urban Branco", preco: 80.90, img: "images/tenis-urban-branco.jpeg" },
        { nome: "Tênis Preto Street", preco: 80.90, img: "images/tenis-street-preto.jpeg" }
    ]
};

// 3. Seleciona o container no HTML
const container = document.getElementById("catalogo-lista");

// 4. Renderiza os cards
if (produtos[colecao]) {
    produtos[colecao].forEach(produto => {
        container.innerHTML += `
            <div class="produto-card">
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                <a href="produto.html" class="botao">Ver detalhes</a>
            </div>
        `;
    });
} else {
    container.innerHTML = `<p>Nenhuma coleção encontrada.</p>`;
}
