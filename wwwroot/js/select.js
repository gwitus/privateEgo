const select  = document.getElementById("optionsNav");
const select2 = document.getElementById("optionsNav2");
const select3 = document.getElementById("optionsNav3");

select.addEventListener("click", () => {
    select.classList.toggle("open");
});

select2.addEventListener("click", () => {
    select2.classList.toggle("open");
});

select3.addEventListener("click", () => {
    select3.classList.toggle("open");
});