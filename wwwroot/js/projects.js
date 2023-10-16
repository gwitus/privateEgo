const projetos = document.getElementById("projectCSharp");
const java = document.getElementById("JAVA");
const web = document.getElementById("WEB1");
const C = document.getElementById("C");
// dando problema no I, tentar adpátar o hamburguer
// const i        = document.getElementById("seta2");

console.log("Documento carregado!");

// #Define Java equals none display
java.style.display = "none";
web.style.display = "none";
C.style.display = "none";

// Função funcionando muito melhor
function validarProjects() {
    if (java.style.display == "none") {
        openProjects();
    } else {
        closeProjects();
    }
}

function closeEgo() {

}

function openProjects() {
    java.style.display = "block";
    java.style.top = "5rem";
    web.style.display = "block";
    web.style.top = "10rem";
    C.style.display = "block";
    C.style.top = "15rem";
}

function closeProjects() {
    java.style.display = "none";
    C.style.display = "none";
    web.style.display = "none";
}