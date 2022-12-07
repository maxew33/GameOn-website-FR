console.log(123)

const inscriptionForm = document.querySelector('.inscription-form'),
    formData = [...document.querySelectorAll('.form-data')],
    textControls = [...document.querySelectorAll('.text-control')],
    formRegex = [
        /.{2,}/, //first name regex
        /.{2,}/, //last name regex
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //email regex
        /[\S\s]+[\S]+/, // birthday regex
        /[0-9]/ //qty regex
    ],
    firstNameInput = document.getElementById('first'),
    lastNameInput = document.getElementById('last'),
    birthdayInput = document.getElementById('birthdate'),
    emailInput = document.getElementById('email'),
    formInputs = [...document.querySelectorAll('.form-inputs')],
    //regex
    nameRegex = /.{2,}/, //everything except linebreak 2 or more times
    mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    birthdayRegex = /[\S\s]+[\S]+/,
    tournmentQtyREgex = /[0-9]/;

/* 
Mettre les regex dans un tableau, faire 2 tableau : 
un pour formdata et un pour text controls */

inscriptionForm.addEventListener('submit', e => {
    e.preventDefault()

    console.log ('click on sbmit button')

    textControls.forEach((controller, idx) => {
        controller.value.match(formRegex[idx]) ? formData[idx].dataset.errorVisible = false : formData[idx].dataset.errorVisible = true
    })

    /*

    formInputs.forEach(formInput => formInput.checkValidity() ? console.log(formInput, 'ok') : console.log(formInput, 'not ok'))

    firstNameInput.value.match(nameRegex) ? firstNameInput.dataset.errorVisible = false : firstNameInput.dataset.errorVisible = true

    console.log('birthday', document.getElementById('birthdate').value === '' ? 123 : 789)
    console.log('birthday', document.getElementById('birthdate').value.match(birthdayRegex) ? 'ok' : 'pas ok')
*/
    // inscriptionForm.checkValidity() && formValidation()
    // display the message if the form is filled
}
)

const formValidation = () => {
    console.log('ok nounou') // afficher le message de confirmation
    // inscriptionForm.submit()
}