  // Function to validate the form
  function validateForm() {
    const firstName = document.getElementById('first-name-input').value;
    const lastName = document.getElementById('last-name-input').value;
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    const repeatPassword = document.getElementById('repeat-password-input').value;

    if (firstName === '' || lastName === '' || email === '' || password === '' || repeatPassword === '') {
        alert('Please fill in all fields');
        return false;
    }

    if (password !== repeatPassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}

// Add a click event listener to the signup button
const signupButton = document.getElementById('signup-button');
signupButton.addEventListener('click', function () {
     if (validateForm()) {
        // If the form is valid, you can submit it or perform other actions here.
        // For example, you can use AJAX to send the data to the server for registration.
        alert('Form is valid. Submitting...');
    }
});