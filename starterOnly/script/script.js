// DOM Elements
const
    navigationContainer = document.querySelector('.main-navbar'),
    navigationToggleBtn = document.querySelector('.toggle-btn'),
    //modal elt
    modalbg = document.querySelector('.modal-container'),
    closeModal = document.querySelector('.modal-close'),
    modalBtn = [...document.querySelectorAll('.modal-btn')],
    //form elt
    inscriptionForm = document.querySelector('.inscription-form'),
    formData = [...document.querySelectorAll('.form-data')],
    textControls = [...document.querySelectorAll('.text-control')],
    termsOfUse = document.getElementById('terms-of-use'),
    submissionModal = document.querySelector('.submission-modal'),
    closeSubmissionModal = document.querySelector('.close-submission-modal'),
    formRegex = [
        /.{2,}/, //first name regex
        /.{2,}/, //last name regex
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email regex
        /[\S\s]+[\S]+/, // birthday regex
        /[0-9]/ //qty regex
    ],
    formInputs = [...document.querySelectorAll('.form-inputs')],
    finalValidation = []

let modalOpened = false

// toggle menu
navigationToggleBtn.addEventListener('click', () => navigationContainer.classList.toggle('responsive'))

console.log(modalBtn)

// displaying modal event
modalBtn.forEach(btn => btn.addEventListener('click', displayModal));
closeModal.addEventListener('click', displayModal)


// launch modal form
function displayModal() {
    console.log('modal click', modalOpened)
    modalbg.style.display = modalOpened ? "none" : "block"
    submissionModal.style.display = 'none'
    modalOpened = !modalOpened
    console.log('modal click', modalOpened)
}

inscriptionForm.addEventListener('submit', e => {
    e.preventDefault()

    //reset the array
    finalValidation.length = 0

    //check the "text-control" inputs => formData 0 to 4
    textControls.forEach((controller, idx) => {
        formValidation(controller.value.match(formRegex[idx]) ? true : false, idx)
    })

    //check the terms of use => formData 6
    formValidation(termsOfUse.checked, 6)

    //if every field is correctly filled => display the message and submit the form
    finalValidation.every(value => value === true) && formValidate()
}
)

const formValidation = (isCorrect, idx) => {
    // if the field is correctly filled => isCorrect === true
    formData[idx].dataset.errorVisible = !isCorrect
    finalValidation.push(isCorrect)
    console.log(finalValidation)
}

const formValidate = () => {
    console.log('ok') // afficher le message de confirmation
    //inscriptionForm.submit()
    submissionModal.style.display='block'
}


