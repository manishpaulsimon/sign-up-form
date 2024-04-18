document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('create-button');
    createButton.addEventListener('click', (event) => {
        event.preventDefault();

        // get inputs from every field

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const number = document.getElementById('number');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        // hide warning message if present





    })

    function validateInput(name, warningMessage) {
        const getName = name.value;
        if (getName === '') {
            warningMessage.message = `${getName} is required`
        }


    }

    function warningMessage(name, message) {
        const getName = name.value;
        return getName;
    }

})