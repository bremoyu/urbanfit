document.addEventListener("DOMContentLoaded", function () {
    const userArea = document.getElementById("userArea");
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const logado = localStorage.getItem("logado");

    if (!userArea) return;

    if (usuario && logado === "true") {
        userArea.innerHTML = `
            <span>Olá, ${usuario.nome}!</span>
            <button id="logoutBtn">Sair</button>
        `;

        document.getElementById("logoutBtn").addEventListener("click", () => {
            localStorage.removeItem("logado");
            alert("Você saiu da sua conta.");
            window.location.reload();
        });
    } else {
        userArea.innerHTML = `
            <a href="cadastro.html">Login / Cadastro</a>
        `;
    }
});
