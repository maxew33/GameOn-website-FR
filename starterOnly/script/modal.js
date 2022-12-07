// DOM Elements
const modalbg = document.querySelector(".bground"),
  closeModal = document.querySelector('.modal-close'),
  modalBtn = [...document.querySelectorAll(".modal-btn")]

let modalOpened = false


function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// displaying modal event
modalBtn.forEach((btn) => btn.addEventListener("click", displayModal));
closeModal.addEventListener('click', displayModal)

// launch modal form
function displayModal() {
  console.log('modal click', modalOpened)
  modalbg.style.display = modalOpened ? "none" : "block"
  modalOpened = !modalOpened

  console.log('modal click', modalOpened)
}
