
const form = document.querySelector('#sign-up-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const errorTextArea = document.querySelector('.error-text');

const checkUsername = () => {
    let valid = false;
    const usernameInput = username.value.trim();
    if (isEmpty(usernameInput)) {
        error(username, "Username is empty.");
    } else if (!isBetween(usernameInput.length, 3, 25)) {
        error(username, "Username must be between 3 and 25 characters.")
    } else {
        success(username);
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let valid = false;
    const emailInput = email.value.trim();
    if (isEmpty(emailInput)) {
        error(email, "Email is empty");
    } else if (!isEmailValid(emailInput)) {
        error(email, "Invalid Email")
    } else {
        success(email);
        valid = true;
    }
    return valid;
}
const checkPassword = () => {
    let valid = false;
    const passwordInput = password.value.trim();

    if (isEmpty(passwordInput)) {
        error(password, 'Password cannot be blank.');
    } else {
        success(password);
        valid = true;
    }
    return valid;
}
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPasswordInput = confirmPassword.value.trim();
    const passwordInput = password.value.trim();

    if (isEmpty(confirmPasswordInput)) {
        error(confirmPassword, 'Please enter the password again');
    } else if (passwordInput !== confirmPasswordInput) {
        error(confirmPassword, 'The password does not match');
    } else {
        success(confirmPassword);
        valid = true;
    }
    return valid;
}

const error = (input, message) => {
    const inputWrapper = input.parentElement;

    inputWrapper.classList.remove('success');
    inputWrapper.classList.add('error');

    const error = errorTextArea;
    error.textContent = message;
};

const success = (input) => {
    const inputWrapper = input.parentElement;

    inputWrapper.classList.remove('error');
    inputWrapper.classList.add('success');

    const error = errorTextArea;
    error.textContent = '';
}

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isEmpty = value => value === '' ? true : false;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

form.addEventListener('input', (function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirmPassword':
            checkConfirmPassword();
    }
}));
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let isUsernameValid = checkUsername();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    if (isFormValid) {
    }
});