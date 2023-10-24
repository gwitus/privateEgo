console.log("Teste");
var chuva = document.getElementById("chuva");;

function trocarImagem() {
    chuva.style.display = "block";
    chuva.style.bottom = "70px";
    chuva.style.width = "300px";
}

// Função para restaurar a imagem ao sair do hover
function restaurarImagem() {
    chuva.style.display = "none";
}