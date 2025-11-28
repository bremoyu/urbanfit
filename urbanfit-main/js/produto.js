console.log("Página de produto carregada.");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

// MESMA LISTA de produtos usada no catálogo
// idealmente você colocaria isso em um arquivo produtos.js para não repetir
const produtos = [
    { id: 1, nome: "Calça Street Preta", preco: 129.90, img: "images/calça-street.jpg", desc: "Tecido leve e resistente, ideal para o dia a dia." },
    { id: 2, nome: "Calça Street Cinza", preco: 129.90, img: "images/calca-street2-cinza.jpeg", desc: "Confortável e estilosa para todos os ambientes." },
    { id: 3, nome: "Calça Cargo Preta", preco: 149.90, img: "images/calca-street3-preta.jpeg", desc: "Modelo cargo urbano com múltiplos bolsos." },
    { id: 4, nome: "Calça Cargo Marrom", preco: 149.90, img: "images/calca-street4-marrom.jpeg", desc: "Visual robusto e moderno." },

    { id: 5, nome: "Camiseta Eco Preta", preco: 39.90, img: "images/camisa-estampada-urbanfit-1-preta.jpg", desc: "Feita com tecido reciclável." },
    { id: 6, nome: "Camiseta Eco Branca", preco: 39.90, img: "images/camisa-estampada-urbanfit-2-branca.jpg", desc: "Leve e respirável." },
    { id: 7, nome: "Camiseta Eco Preta C/Estampa Caveira", preco: 45.90, img: "images/camisa-estampada-urbanfit-3-preta-caveira.jpg", desc: "Estampa exclusiva." },

    { id: 8, nome: "Tênis Urban Branco", preco: 80.90, img: "images/tenis-urban-branco.jpeg", desc: "Ideal para quem anda muito pela cidade." },
    { id: 9, nome: "Tênis Preto Street", preco: 80.90, img: "images/tenis-street-preto.jpeg", desc: "Durável e confortável." }
];

const produto = produtos.find(p => p.id === id);

if (!produto) {
    document.getElementById("produto-card").innerHTML = "<p>Produto não encontrado.</p>";
} else {
    document.querySelector("#produto-card img").src = produto.img;
    document.querySelector("#produto-card img").alt = produto.nome;

    document.querySelector(".produto-info h2").textContent = produto.nome;
    document.querySelector(".produto-info .descricao").textContent = produto.desc;
    document.querySelector(".produto-info .preco").textContent = `R$ ${produto.preco.toFixed(2)}`;

    document.getElementById("botao-comprar").onclick = () => {
        adicionarAoCarrinho({
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.img
        });
    };
}
