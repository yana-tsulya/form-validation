/**
 * Created by yana on 12/17/14.
 */

var email = document.getElementById('email'),
    emailError = document.getElementById('email-error'),
    login = document.getElementById('login'),
    loginError = document.getElementById('login-error'),
    password = document.getElementById('password'),
    passwordError = document.getElementById('password-error'),
    termsCheckbox = document.getElementById('terms-check'),
    termsError = document.getElementById('terms-error'),
    submitButton = document.getElementById('submit-button');

function validateField(field, errorContainer) {
    if (field.value.length == 0) {
        field.classList.add('error');
        errorContainer.textContent = "Empty field";
        event.preventDefault();
    }
    else if (field.value.length > 20) {
        field.classList.add('error');
        errorContainer.textContent = "Maximum length - 20";
        event.preventDefault();
    }
    else {
        field.classList.remove('error');
        errorContainer.textContent = "";
    }
}

submitButton.addEventListener('click', function(event) {

    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(regex.test(email.value))) {
        email.classList.add('error');
        emailError.textContent = "Not a valid e-mail address";
        event.preventDefault();
    }
    else {
        validateField(email, emailError)
    }

    validateField(login, loginError);

    validateField(password, passwordError);

    if (!(termsCheckbox.checked)) {
        termsError.textContent = "You must agree with terms";
    }
    else {
        termsError.textContent = "";
    }
});



