<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Modern Solutions</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <h2>Login to Modern Solutions</h2>

        <!-- Login Form -->
        <form id="loginForm">
            <div class="input-group">
                <label for="identifier">Email or Phone Number:</label>
                <input type="text" id="identifier" placeholder="Enter email or phone number" required>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" required>
            </div>
            <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <a href="#" id="show-signup">Create a new account</a></p>

        <!-- Signup Section (hidden by default) -->
        <div id="signupSection">
            <h2>Create a New Account</h2>
            <form id="signupForm">
                <div class="input-group">
                    <label for="newIdentifier">Email or Phone Number:</label>
                    <input type="text" id="newIdentifier" placeholder="Enter email or phone number" required>
                </div>
                <div class="input-group">
                    <label for="newPassword">Password:</label>
                    <input type="password" id="newPassword" placeholder="Enter your password" required>
                </div>
                <button type="submit">Create Account</button>
            </form>
            <p>Already have an account? <a href="#" id="show-login">Login</a></p>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 Modern Solutions. All rights reserved.</p>
    </footer>

    <script src="login.js"></script>
</body>
</html>
