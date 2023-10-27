const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};

function makeAlbum() {
    let input = DOMSelectors.firstName.value
}

function addCard() {
    document
    .querySelector(".gallery")
    .insertAdjacentHTML(
        "afterend",
    /*     `<div class="card"><h2 class="card-title">${DOMSelectors.firstName.value}</h2></div>` */
            `<div class="gallery" id="box">
            <h2 class="card-title">${DOMSelectors.firstName.value}</h2>
            <img class="image" src="https://th.bing.com/th/id/R.f767dd197e0229c167cb5cb84068f73d?rik=Mkyk1KP2dqdwSA&pid=ImgRaw&r=0" alt="">
            <button class="button">Remove</button>
            </div>`
    )
}

console.log(DOMSelectors.h2s);

DOMSelectors.form.addEventListener("submit", function(event){
event.preventDefault();
    const Album = makeAlbum()
    addCard(Album)
    clearFields()
    addRemoveButtons()



console.log(DOMSelectors.firstName.value);
DOMSelectors.h2s.forEach((el) => (el.textContent = DOMSelectors.firstName.value));
});

function remove() {
    let btn = document.querySelectorAll(".button")
    console.log(btn)
    btn.forEach(button => button.addEventListener("click", function(event) {
    let cardOld = (event.target.parentElement);
    cardOld.remove();
    }))
}

remove();