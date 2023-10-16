const select  = document.getElementById("optionsNav");
const select2 = document.getElementById("optionsNav2");
const select3 = document.getElementById("optionsNav3");

// options
let optionXP = document.getElementById("xp");

select.addEventListener("click", () => {
    // select.classList.toggle("open");
    select.style.marginBottom = '160px';
    select.style.outline = "0";
    optionXP.style.outline = '0';
});

select2.addEventListener("click", () => {
    select2.classList.toggle("open");
});

select3.addEventListener("click", () => {
    select3.classList.toggle("open");
});