var optionAbout = document.getElementById("optionMe");
var optionAboutSkill = document.getElementById("optionMe1");
const optionAboutMe = document.getElementById("optionMeAbout");
const i = document.getElementById("seta");
const contato = document.getElementById("contatoDiv");

// #define size of contato equals 6rem (1 rem == 10px)
// contato.style.top = "6rem";

// optionAboutMe.style.display = "none";
optionAbout.style.display = "none";
optionAboutSkill.style.display = "none";
// Sample Dom
function validarClique() {
    if (optionAboutSkill.style.display == "none") {
        optionAboutMe.addEventListener("click", () => {
            contato.style.top = "12.8rem";
            // optionAboutMe.style.transition = "transition: all 1s ease-in-out;";
            optionAbout.style.display = "block";
            optionAbout.style.top = "5rem";
            optionAboutSkill.style.display = "block";
            optionAboutSkill.style.top = "9rem"
            i.style.transform = "rotate(0.75turn)";
        });
    } else {
        optionAboutMe.addEventListener("click", () => {
            contato.style.top = "6rem";
            optionAboutMe.style.marginBottom = "0rem";
            optionAbout.style.display = "none";
            optionAboutSkill.style.display = "none";
            i.style.transform = "rotate(0turn)";
        });
    }
}