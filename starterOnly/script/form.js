const inscriptionForm = document.querySelector('.inscription-form'),
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
    submissionModal.style.display='block'
    closeSubmissionModal.addEventListener('click', () => inscriptionForm.submit())
}