console.log("arquivo carregado");

// const cabecalhoItems = document.getElementById("hiddenItems");
// var cabecalhoItemsSourceCode = cabecalhoItems[1];

var cabecalhoItems    = document.querySelector("#hiddenItems:nth-child(1)");
var cabecalhoProjects = document.querySelector("#hiddenItems:nth-child(2)");

const itemsAboutHead = document.getElementsByTagName("ul")[0];
const itemsAboutItem = document.getElementsByTagName("ul")[1];
const itemsProjectsHead = document.getElementsByTagName("ul")[2];
const itemsProjectsItem = document.getElementsByTagName("ul")[3];
const item  = document.getElementById("item");

// garantindo que o head fique como padrão
itemsAboutItem.style.display = "none";
itemsProjectsItem.style.display = "none";

// garantindo eles fiquem em paralelo
itemsAboutHead.style.top    = "20px";
itemsProjectsHead.style.top = "-300%";

// 

// 

function exe(){
    if (itemsAboutHead.style.display != "none") {
        itemsAboutHead.style.display = "none";
        itemsAboutItem.style.display = "block";
        itemsAboutItem.style.top = "20px";
        itemsProjectsHead.style.top = "30px";

        if (itemsProjectsItem.style.display != "none") {
            exeProjects();
        }

    } else {
        itemsAboutHead.style.display = "block";
        itemsAboutItem.style.display = "none";
    } 
}

function exeProjects(){
    if (itemsProjectsHead.style.display != "none") {
        itemsProjectsHead.style.display = "none";
        itemsProjectsItem.style.display = "block";
        itemsProjectsItem.style.top = "-80px";

        if (itemsAboutItem.style.display != "none") {
            exe();
        }

    } else {
        itemsProjectsHead.style.display = "block";
        itemsProjectsItem.style.display = "none";
    }
}