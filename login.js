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

        // Simulate login check (this could be a server request in a real app)
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

        // Simulate account creation (this could be a server request in a real app)
        if (createAccount(newIdentifier, newPassword)) {
            alert('Account created successfully!');
            window.location.href = 'index.html';  // Redirect to the main page
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
        // Replace this logic with actual authentication (e.g., API call to verify credentials)
        const mockUser = { email: 'user@example.com', phone: '1234567890', password: 'password123' };
        return (identifier === mockUser.email || identifier === mockUser.phone) && password === mockUser.password;
    }

    // Simulate account creation
    function createAccount(identifier, password) {
        // Replace this logic with actual account creation (e.g., API call to register the user)
        const existingUsers = ['user@example.com', '1234567890'];  // Replace with actual check
        if (existingUsers.includes(identifier)) {
            return false;  // Account already exists
        } else {
            // Simulate storing the new account
            console.log(`New account created for: ${identifier}`);
            return true;
        }
    }
});
