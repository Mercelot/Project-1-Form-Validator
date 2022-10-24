const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show failure
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerHTML = message;
}

// Show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email is valid
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     return re.test(String(email).toLowerCase());
// }
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Capitalise first letter
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {

        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} needs to be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} needs to be below ${max} characters`);
    } else {
        showSuccess(input);
    }
}
// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    // // Username empty
    // if (username.value === '') {
    //     showError(username, "Username is required");
    // } else {
    //     showSuccess(username);
    // }
    //
    // // Email empty
    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email)
    // }
    //
    // // Password empty
    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password)
    // }
    //
    // // Password2 empty
    // if (password2.value === '') {
    //     showError(password2, 'Password is required');
    // } else {
    //     showSuccess(password2)
    // }
})

