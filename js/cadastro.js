document.addEventListener("DOMContentLoaded", () => {

    function cadastrar() {
        const nome = document.getElementById("cad-nome").value.trim();
        const email = document.getElementById("cad-email").value.trim();
        const senha = document.getElementById("cad-senha").value.trim();
        const confirmar = document.getElementById("cad-confirmar").value.trim();

        if (!nome || !email || !senha || !confirmar) {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha !== confirmar) {
            alert("As senhas não coincidem!");
            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso! Agora faça login.");

        document.getElementById("aba-login").checked = true;
    }

    function login() {
        const email = document.getElementById("login-email").value.trim();
        const senha = document.getElementById("login-senha").value.trim();

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            alert("Nenhum usuário cadastrado!");
            return;
        }

        if (email === usuario.email && senha === usuario.senha) {
            alert("Login realizado com sucesso!");
            window.location.href = "produto.html";
        } else {
            alert("Email ou senha incorretos!");
        }
    }

    // BOTÕES
    const btnCadastro = document.querySelector("#cadastro-box button");
    const btnLogin = document.querySelector("#login-box button");

    btnCadastro.addEventListener("click", cadastrar);
    btnLogin.addEventListener("click", login);
});
