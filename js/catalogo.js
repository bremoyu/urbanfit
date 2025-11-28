// Só pra confirmar no console que a página carregou
console.log("Página de catálogo carregada.");

// Pega o que veio na URL depois do "?"
const params = new URLSearchParams(window.location.search);

// Extrai o valor de "colecao", ex: ?colecao=calcas
const colecao = params.get("colecao");

// Objeto com todas as coleções e seus produtos
// Cada chave representa uma coleção
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

// Seleciona o container onde os produtos serão exibidos
const container = document.getElementById("catalogo-lista");

// Verifica se a coleção existe dentro do objeto "produtos"
if (produtos[colecao]) {
    // Percorre os produtos da coleção selecionada
    produtos[colecao].forEach(produto => {

        // Adiciona cada produto como um card dentro do HTML
        container.innerHTML += `
            <div class="produto-card">
                <img src="${produto.img}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>

                <!-- Link para a página de detalhes do produto -->
                <a href="produto.html?id=${produto.id}" class="botao">Ver detalhes</a>
            </div>
        `;
    });

} else {
    // Caso a coleção não exista ou venha errada na URL
    container.innerHTML = `<p>Nenhuma coleção encontrada.</p>`;
}
