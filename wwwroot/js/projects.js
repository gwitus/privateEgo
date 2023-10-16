// variaveis globais
console.log("Documento carregado!");
const projetos = document.getElementById("projectCSharp");
const java = document.getElementById("JAVA");
const web = document.getElementById("WEB1");
const C = document.getElementById("C");
const projectsMain = document.getElementById("projects");
// var trazidas
var optionAbout = document.getElementById("optionMe");
var optionAboutSkill = document.getElementById("optionMe1");
const optionAboutMe = document.getElementById("optionMeAbout");
const i = document.getElementById("seta");
const seta = document.getElementById("seta2");
const contato = document.getElementById("contatoDiv");
const sourceCode = document.getElementById("sourceCode");

// #Define or set value on pertinent VAR'S
java.style.display = "none";
web.style.display = "none";
C.style.display = "none";
optionAbout.style.display = "none";
optionAboutSkill.style.display = "none";

// functions
function openEgo() {
    // optionAboutMe.style.transition = "transition: all 1s ease-in-out;";
    optionAbout.style.display = "block";
    optionAbout.style.top = "5rem";
    optionAboutSkill.style.display = "block";
    optionAboutSkill.style.top = "9rem"
    i.style.transform = "rotate(0.75turn)";
    // contato.style.top = "12.8rem";
}

function closeEgo() {
    // contato.style.top = "6rem";
    optionAboutMe.style.marginBottom = "0rem";
    optionAbout.style.display = "none";
    optionAboutSkill.style.display = "none";
    i.style.transform = "rotate(0turn)";
}

function openProjects() {
    java.style.display = "block";
    java.style.top = "5rem";
    web.style.display = "block";
    web.style.top = "10rem";
    C.style.display = "block";
    C.style.top = "15rem";
    seta.style.transform = "rotate(0.75turn)";
}

function closeProjects() {
    java.style.display = "none";
    C.style.display = "none";
    web.style.display = "none";
    seta.style.transform = "rotate(0turn)";
}


// Função funcionando muito melhor
function egoHability() {
    if (optionAbout.style.display == "none" && java.style.display == "none"){
        openEgo();
        projectsMain.style.paddingTop = "7rem";
    } else {
        closeEgo();
        projectsMain.style.paddingTop = "0px";
    }
}

function projectsHability() {
    if (optionAbout.style.display == "none" && java.style.display == "none"){
        openProjects();
        sourceCode.style.display = "none";
    } else {
        closeProjects();
        sourceCode.style.display = "block";
    }
}