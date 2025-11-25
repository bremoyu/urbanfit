// Espera o HTML carregar pra rodar o JS
document.addEventListener("DOMContentLoaded", () => {

    // Função de cadastrar usuário
    function cadastrar() {
        // pegar valores digitados no cadastro
        const nome = document.getElementById("cad-nome").value.trim();
        const email = document.getElementById("cad-email").value.trim();
        const senha = document.getElementById("cad-senha").value.trim();
        const confirmar = document.getElementById("cad-confirmar").value.trim();

        // verifica se tem campo vazio
        if (!nome || !email || !senha || !confirmar) {
            alert("Preencha todos os campos!");
            return;
        }

        // verifica se as senhas são iguais
        if (senha !== confirmar) {
            alert("As senhas não coincidem!");
            return;
        }

        // cria o objeto do usuário
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // salva o usuário no navegador
        localStorage.setItem("usuario", JSON.stringify(usuario));

        // mensagem e troca para aba de login
        alert("Cadastro realizado com sucesso! Agora faça login.");
        document.getElementById("aba-login").checked = true;
    }

    // Função de login
    function login() {
        // pegar valores digitados no login
        const email = document.getElementById("login-email").value.trim();
        const senha = document.getElementById("login-senha").value.trim();

        // pegar usuário salvo
        const usuario = JSON.parse(localStorage.getItem("usuario"));

        // verifica se existe alguém cadastrado
        if (!usuario) {
            alert("Nenhum usuário cadastrado!");
            return;
        }

        // compara dados digitados com os salvos
        if (email === usuario.email && senha === usuario.senha) {
            alert("Login realizado com sucesso!");
            // redireciona para outra página
            window.location.href = "produto.html";
        } else {
            alert("Email ou senha incorretos!");
        }
    }

    // pegar os botões do cadastro e do login
    const btnCadastro = document.querySelector("#cadastro-box button");
    const btnLogin = document.querySelector("#login-box button");

    // adicionar ações de clique
    btnCadastro.addEventListener("click", cadastrar);
    btnLogin.addEventListener("click", login);
});
