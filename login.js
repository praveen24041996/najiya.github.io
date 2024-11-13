document.addEventListener('DOMContentLoaded', function () {
    // Get elements from the page
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const signupSection = document.getElementById('signupSection');

    // Handle Login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const identifier = document.getElementById('identifier').value;
        const password = document.getElementById('password').value;

        // Simulate login check by checking if the account exists in localStorage
        if (validateUser(identifier, password)) {
            // Store OTP or user session in sessionStorage
            sessionStorage.setItem('otp', 'someOtpValue');  // Replace with actual OTP logic
            alert('Login successful!');
            window.location.href = 'index.html';  // Redirect to the main page
        } else {
            alert('Invalid login credentials!');
        }
    });

    // Handle Signup
    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newIdentifier = document.getElementById('newIdentifier').value;
        const newPassword = document.getElementById('newPassword').value;

        // Simulate account creation (store account in localStorage)
        if (createAccount(newIdentifier, newPassword)) {
            alert('Account created successfully!');
            window.location.href = 'login.html';  // Redirect to the login page after creating account
        } else {
            alert('Account already exists!');
        }
    });

    // Show signup form
    showSignupLink.addEventListener('click', function () {
        loginForm.style.display = 'none';
        signupSection.style.display = 'block';
    });

    // Show login form
    showLoginLink.addEventListener('click', function () {
        signupSection.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Simulate user validation
    function validateUser(identifier, password) {
        // Check if account is in localStorage
        const userAccount = JSON.parse(localStorage.getItem(identifier));

        // If the user exists and the password matches, return true
        return userAccount && userAccount.password === password;
    }

    // Simulate account creation
    function createAccount(identifier, password) {
        // Check if account already exists in localStorage
        if (localStorage.getItem(identifier)) {
            return false;  // Account already exists
        } else {
            // Store the new account in localStorage
            const newAccount = { identifier, password };
            localStorage.setItem(identifier, JSON.stringify(newAccount));
            return true;  // Account created successfully
        }
    }
});
