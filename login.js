// Toggle between Login and Signup Forms
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('login-header').style.display = 'none';
    document.getElementById('show-signup').style.display = 'none';
    document.getElementById('signupSection').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('login-header').style.display = 'block';
    document.getElementById('show-signup').style.display = 'inline';
    document.getElementById('signupSection').style.display = 'none';
});

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const identifier = document.getElementById('identifier').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => (u.emailOrPhone === identifier || u.emailOrPhone === identifier) && u.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to another page if necessary
        // window.location.href = 'dashboard.html'; // Example redirect
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newIdentifier = document.getElementById('newIdentifier').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!newIdentifier || !newPassword) {
        alert('Please fill in all fields.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = users.some(u => u.emailOrPhone === newIdentifier);
    if (userExists) {
        alert('An account with this email or phone number already exists.');
        return;
    }

    // Create a new user and save to localStorage
    const newUser = {
        emailOrPhone: newIdentifier,
        password: newPassword
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    document.getElementById('signupSection').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('show-signup').style.display = 'inline';
});
