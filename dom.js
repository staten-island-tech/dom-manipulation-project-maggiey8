const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};

console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){
event.preventDefault();

document
    .querySelector(".gallery")
    .insertAdjacentHTML(
        "afterbegin",
        `<div class="card"><h2 class="card-header">${DOMSelectors.firstName.value}</h2></div>`
    )

console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach(
    (el) => (el.textContent = DOMSelectors.firstName.value)
    );
    
});