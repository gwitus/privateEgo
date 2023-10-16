var optionAbout       = document.getElementById("optionMe");
var optionAboutSkill  = document.getElementById("optionMe1");
const optionAboutMe   = document.getElementById("optionMeAbout");

// optionAboutMe.style.display = "none";
optionAbout.style.display = "none";
optionAboutSkill.style.display = "none";



function validarClique() {
    if (optionAboutSkill.style.display == "none") {
        optionAboutMe.addEventListener("click", () => {
            optionAboutMe.style.marginBottom = "14rem";
            // optionAboutMe.style.transition = "transition: all 1s ease-in-out;";
            optionAbout.style.display        = "block";
            optionAboutSkill.style.display   = "block";
            optionAbout.style.marginTop      = "3rem";
            optionAboutSkill.style.marginTop = "7rem"
        });
    } else {
        optionAboutMe.addEventListener("click", () => {
           optionAboutMe.style.marginBottom = "0rem";
           optionAbout.style.display        = "none";
           optionAboutSkill.style.display   = "none";
        });
    }
}
