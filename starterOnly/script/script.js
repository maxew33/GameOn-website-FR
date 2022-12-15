// DOM Elements
const
    navigationContainer = document.querySelector('.main-navbar'),
    navigationToggleBtn = document.querySelector('.toggle-btn'),
    //modal elt
    modalContainer = document.querySelector('.modal-container'),
    modalBtn = [...document.querySelectorAll('.modal-btn'), document.querySelector('.modal-close')],
    //form elt
    inscriptionForm = document.querySelector('.inscription-form'),
    formData = [...document.querySelectorAll('.form-data')],
    textControls = [...document.querySelectorAll('.text-control')],
    locationsInput = [...document.querySelectorAll('.locations-input')],
    termsOfUse = document.getElementById('terms-of-use'),
    confirmationModal = document.querySelector('.submission-modal'),
    //form validation
    formConditions = {
        text: /.{2,}/,
        email: /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9-_]+[.][a-z]{2,5}$/,
        date: /./,
        number: /^\d{1,2}$/
    },
    finalValidation = []

let modalOpened = false

// toggle menu
navigationToggleBtn.addEventListener('click', () => navigationContainer.classList.toggle('responsive'))

// displaying modal event
modalBtn.forEach(btn => btn.addEventListener('click', displayModal))

// launch modal form
function displayModal() {
    modalContainer.style.display = modalOpened ? "none" : "block"
    confirmationModal.style.display = 'none'
    modalOpened = !modalOpened
}

// check form data
inscriptionForm.addEventListener('submit', e => {
    e.preventDefault()

    //reset the array
    finalValidation.length = 0

    //check the "text-control" inputs => formData 0 to 4
    textControls.forEach((controller, idx) => {
        formValidation(controller.value.match(formConditions[controller.type]) ? true : false, idx)
        controller.type === 'date' && dateValidation(controller.valueAsNumber, idx)
    })

    //check the place => formData 5    
    let locationChecked = false, locationIdx = 0

    while(locationChecked === false && locationIdx < locationsInput.length - 1 ){
        locationsInput[locationIdx].checked && (locationChecked = true)
        locationIdx++
    }
    
    formValidation(locationChecked, 5)

    //check the terms of use => formData 6
    formValidation(termsOfUse.checked, 6)

    //if every field is correctly filled => display the message and submit the form
    finalValidation.every(value => value === true) && formValidate()
}
)

// check if the date is before now and the age > 16
function dateValidation(myDate, idx) {
    let dateValid = false
    let errorMessage = "Veuillez entrer une date de naissance"

    if (myDate > Date.now()) {
        errorMessage = "Vous devez être né.e avant aujourd'hui."
    }
    else if (myDate) {
        // get the difference between birthday and now
        const DateDifference = Date.now() - myDate
        // convert this difference in year from 1970
        const year = new Date(DateDifference).getUTCFullYear()
        // get the age
        const age = Math.abs(year - 1970)
        age > 16 ? dateValid = true : errorMessage = "Vous devez avoir plus de 16 ans."
    }

    textControls[idx].parentNode.dataset.error = errorMessage

    formValidation(dateValid ? true : false, idx)
}

function formValidation(isCorrect, idx) {
    // if the field is correctly filled => isCorrect === true
    formData[idx].dataset.errorVisible = !isCorrect
    finalValidation.push(isCorrect)
}

function formValidate() {
    //reset the form
    inscriptionForm.reset()

    confirmationModal.style.display = 'block'
}