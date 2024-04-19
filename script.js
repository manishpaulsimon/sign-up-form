document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create-button');
    createButton.addEventListener('click', (event) => {
        event.preventDefault();

        const firstPass = document.getElementById('password').value;
        const secondPass = document.getElementById('confirm-password').value;
       
        const passwordWarning = document.getElementById('password').nextElementSibling;
        const confirmPassWarning = document.getElementById('confirm-password').nextElementSibling;
        passwordWarning.textContent = '';
        confirmPassWarning.textContent = '';
        passwordWarning.style.visibility = 'hidden';
        confirmPassWarning.style.visibility = 'hidden';

        if (firstPass !== secondPass) {
            passwordWarning.textContent = '*Passwords do not match';
            passwordWarning.style.visibility = 'visible';
        }

        const firstName = document.getElementById('first-name').nextElementSibling;
        const lastName = document.getElementById('last-name').nextElementSibling;
        const email = document.getElementById('email').nextElementSibling;
        const phoneNumber = document.getElementById('number').nextElementSibling;

        firstName.textContent = '';
        lastName.textContent = '';
        email.textContent = '';
        phoneNumber.textContent = '';

        firstName.style.visibility = 'hidden';
        lastName.style.visibility = 'hidden';
        email.style.visibility = 'hidden';
        phoneNumber.style.visibility = 'hidden';

        if (!firstName)  { 
            firstName.textContent = '*First name required'
            firstName.style.visibility = 'visible';
        }
        if (!lastName) {
            lastName.textContent = '*Last name required'
            lastName.style.visibility = 'visible';
        }
        if (!email) {
            email.textContent = '*Email required'
            email.style.visibility = 'visible';
        }
        if (!phoneNumber) {
            phoneNumber.textContent = '*phoneNumber required'
            phoneNumber.style.visibility = 'visible';
        }


    })
})



