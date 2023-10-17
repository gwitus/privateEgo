console.log("arquivo carregado");

const cabecalhoItems = document.getElementById("hiddenItems");
const items = document.getElementById("items");
const item = document.getElementById("item");

// var globais
items.style.display = "none";

function openAbout() {
    if(items.style.display == "none"){
        cabecalhoItems.style.display = "none";
        items.style.display = "block";
    } else {
        closeAbout();
    }
}

function closeAbout() {
    cabecalhoItems.style.display = "none";
    items.style.display = "block";
}