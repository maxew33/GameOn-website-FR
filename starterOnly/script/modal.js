// DOM Elements
const
  navigationContainer = document.querySelector('.main-navbar'),
  navigationToggleBtn = document.querySelector('.toggle-btn'),
  modalbg = document.querySelector('.modal-container'),
  closeModal = document.querySelector('.modal-close'),
  modalBtn = [...document.querySelectorAll('.modal-btn')]

let modalOpened = false

// toggle menu
navigationToggleBtn.addEventListener('click', () => navigationContainer.classList.toggle('responsive'))


// displaying modal event
modalBtn.forEach(btn => btn.addEventListener('click', displayModal));
closeModal.addEventListener('click', displayModal)


// launch modal form
function displayModal() {
  console.log('modal click', modalOpened)
  modalbg.style.display = modalOpened ? "none" : "block"
  modalOpened = !modalOpened
  console.log('modal click', modalOpened)
}


