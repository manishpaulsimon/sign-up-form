document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create-button');
    createButton.addEventListener('click', (event) => {
        event.preventDefault();

        // get inputs
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const number = document.getElementById('number');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        document.querySelectorAll('.warning-text').forEach(warning => {
            warning.textContent = '';
            warning.style.visibility = 'hidden';
        });

        // check if input fields are full using validateInput function

        validateInput(firstName,'*First name is required');
        validateInput(lastName, '*Last name is required');
        validateInput(email,'*Email is required');
        validateInput(number,'*Phone number is required');

        // Check passwords match

        if (password.value !== confirmPassword.value)  {
            displayWarning(password,'*Passwords do not match');

        }

        // Pass name and message to function

    });
    function validateInput(inputElement,message) {
        if (inputElement.value.trim() === '') {
            displayWarning(inputElement, message);
        }
    }

    function displayWarning(inputElement,message) {
        const warningText = inputElement.nextElementSibling;
        warningText.textContent = message;
        warningText.style.visibility = 'visible';
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//     const createButton = document.getElementById('create-button');
//     createButton.addEventListener('click', (event) => {
//         event.preventDefault();

//         const firstPass = document.getElementById('password').value;
//         const secondPass = document.getElementById('confirm-password').value;
       
//         const passwordWarning = document.getElementById('password').nextElementSibling;
//         const confirmPassWarning = document.getElementById('confirm-password').nextElementSibling;
//         passwordWarning.textContent = '';
//         confirmPassWarning.textContent = '';
//         passwordWarning.style.visibility = 'hidden';
//         confirmPassWarning.style.visibility = 'hidden';

//         if (firstPass !== secondPass) {
//             passwordWarning.textContent = '*Passwords do not match';
//             passwordWarning.style.visibility = 'visible';
//         }

//         const firstName = document.getElementById('first-name').nextElementSibling;
//         const lastName = document.getElementById('last-name').nextElementSibling;
//         const email = document.getElementById('email').nextElementSibling;
//         const phoneNumber = document.getElementById('number').nextElementSibling;

//         firstName.textContent = '';
//         lastName.textContent = '';
//         email.textContent = '';
//         phoneNumber.textContent = '';

//         firstName.style.visibility = 'hidden';
//         lastName.style.visibility = 'hidden';
//         email.style.visibility = 'hidden';
//         phoneNumber.style.visibility = 'hidden';

//         if (!firstName)  { 
//             firstName.textContent = '*First name required'
//             firstName.style.visibility = 'visible';
//         }
//         if (!lastName) {
//             lastName.textContent = '*Last name required'
//             lastName.style.visibility = 'visible';
//         }
//         if (!email) {
//             email.textContent = '*Email required'
//             email.style.visibility = 'visible';
//         }
//         if (!phoneNumber) {
//             phoneNumber.textContent = '*phoneNumber required'
//             phoneNumber.style.visibility = 'visible';
//         }


//     })
// })



