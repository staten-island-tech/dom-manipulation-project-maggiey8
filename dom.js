const DOMSelectors = {
    form: document.querySelector("#form"),
    title: document.querySelector(".title"),
    author: document.querySelector(".author"),
    link: document.querySelector(".imgLink"),
    button: document.querySelectorAll("#submit")
};

/* function makeAlbum() {
    let title = DOMSelectors.firstName.value
    title.push(DOMSelectors)//???????//
} */

function addCard() {
    document.querySelector(".gallery").insertAdjacentHTML(
        "afterend",
    /*     `<div class="card"><h2 class="card-title">${DOMSelectors.firstName.value}</h2></div>` */
            `<div class="gallery">
            <h2 class="card-title">${DOMSelectors.title.value}</h2>
            <h3 class="card-author">${DOMSelectors.author.value}</h3>
            <img class="image" src="${DOMSelectors.link.value}" alt=""></img>
            <button class="button" id="remove">Remove</button>
            </div>`
    )
}

function clearFields() {
    DOMSelectors.title.value = "";
    DOMSelectors.author.value = "";
    DOMSelectors.link.value = "";
}

function remove() {
    let btn = document.querySelectorAll("#remove")
    //console.log(btn)
    btn.forEach(button => button.addEventListener("click", function(event) {
    let cardOld = (event.target.parentElement);
    cardOld.remove();
    }
    ))
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    addCard()
    clearFields()
    remove()
});
 
