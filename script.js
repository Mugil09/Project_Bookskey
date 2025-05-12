var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.querySelector(".add-button")

addbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

var popup_cancel_btn = document.getElementById("popup-cancel-btn")
popup_cancel_btn.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var book_input = document.getElementById("book-input")
var author_input = document.getElementById("author-input")
var description_input = document.getElementById("description-input")
var popup_add_btn = document.getElementById("popup-add-btn")
var container = document.querySelector(".container")

popup_add_btn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!book_input.value.trim() || !author_input.value.trim() || !description_input.value.trim()) {
        alert("Please fill out all fields.");
        return;
    }
    var book_container = document.createElement("div")
    book_container.setAttribute("class", "book_container")
    book_container.innerHTML = `
    <h2>${book_input.value}</h2>
    <h5>${author_input.value}</h5>
    <p>${description_input.value}</p>
    <button id="container-delete-btn" onclick="delete_container(event)">Delete</button>
    `
    container.append(book_container)

    book_input.value = '';
    author_input.value = '';
    description_input.value = '';

    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function delete_container(event){
    event.target.parentElement.remove()
}



