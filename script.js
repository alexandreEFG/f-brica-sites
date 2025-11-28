document.getElementById("acessoForm").addEventListener("submit", function(e){
    e.preventDefault();

    const idade = parseInt(document.getElementById("idade").value);

    if (idade < 15) {
        alert("Acesso negado. Você precisa ter 15 anos ou mais.");
    } else {
        alert("Acesso liberado!");
        window.location.href = "index.html"; // redireciona para sua página principal
    }
});
