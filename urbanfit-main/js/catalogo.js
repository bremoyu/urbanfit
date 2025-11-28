// Catálogo simples – pode ser expandido futuramente
console.log("Página de catálogo carregada.");

const params = new URLSearchParams(window.location.search);
const colecao = params.get("colecao");

// 2. Estrutura dos produtos
const produtos = {
    calcas: [
        { id: 1, nome: "Calça Street Preta", preco: 129.90, img: "images/calça-street.jpg" },
        { id: 2, nome: "Calça Street Cinza", preco: 129.90, img: "images/calca-street2-cinza.jpeg" },
        { id: 3, nome: "Calça Cargo Preta", preco: 149.90, img: "images/calca-street3-preta.jpeg" },
        { id: 4, nome: "Calça Cargo Marrom", preco: 149.90, img: "images/calca-street4-marrom.jpeg" }
    ],

    ecostreet: [
        { id: 5, nome: "Camiseta Eco Preta", preco: 39.90, img: "images/camisa-estampada-urbanfit-1-preta.jpg" },
        { id: 6, nome: "Camiseta Eco Branca", preco: 39.90, img: "images/camisa-estampada-urbanfit-2-branca.jpg" },
        { id: 7, nome: "Camiseta Eco Preta C/Estampa Caveira", preco: 45.90, img: "images/camisa-estampada-urbanfit-3-preta-caveira.jpg" }
    ],

    tenis: [
        { id: 8, nome: "Tênis Urban Branco", preco: 80.90, img: "images/tenis-urban-branco.jpeg" },
        { id: 9, nome: "Tênis Preto Street", preco: 80.90, img: "images/tenis-street-preto.jpeg" }
    ]
};

const container = document.getElementById("catalogo-lista");

// Renderiza os cards
if (produtos[colecao]) {
    produtos[colecao].forEach(produto => {
        container.innerHTML += `
            <div class="produto-card">
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                <a href="produto.html?id=${produto.id}" class="botao">Ver detalhes</a>
            </div>
        `;
    });
} else {
    container.innerHTML = `<p>Nenhuma coleção encontrada.</p>`;
}
