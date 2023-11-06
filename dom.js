const DOMSelectors = {
    form: document.querySelector(".form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    link: document.querySelector(".link"),
    imgs: document.querySelectorAll("img")
};

/* function makeAlbum() {
    let title = DOMSelectors.firstName.value
    title.push(DOMSelectors)//???????//
} */

function addCard() {
    document.querySelector(".gallery").insertAdjacentHTML(
        "afterend",
    /*     `<div class="card"><h2 class="card-title">${DOMSelectors.firstName.value}</h2></div>` */
            `<div class="gallery" id="box">
            <h2 class="card-title">${DOMSelectors.firstName.value}</h2>
            <img class="image" src="${DOMSelectors.link.value}" alt=""></img>
            <button class="button">Remove</button>
            </div>`
    )
}

console.log(DOMSelectors.h2s);

function clearFields() {
    let inputs = document.querySelectorAll(".form")
    inputs.clear()
}

function remove() {
    let btn = document.querySelectorAll(".button")
    console.log(btn)
    btn.forEach(button => button.addEventListener("click", function(event) {
    let cardOld = (event.target.parentElement);
    cardOld.remove();
    }
    ))
}

DOMSelectors.form.addEventListener("submit", function(event){
event.preventDefault();
    //const Album = makeAlbum()
    //addCard(Album)
    addCard()
    clearFields()
    
console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.firstName.value));

DOMSelectors.img.forEach((el) => (el.textContent) = DOMSelectors.link.value);
});

DOMSelectors.button.addEventListener("submit", function(event) {
    remove()
}) 
