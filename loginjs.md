document.getElementById('send-otp').addEventListener('click', function() {
    const mobileNumber = document.getElementById('mobile').value;

    if (mobileNumber) {
        // For demo purposes, we're just generating a random OTP here.
        // In a real application, you'd send an API request to a server to generate and send the OTP.
        const otp = Math.floor(100000 + Math.random() * 900000);  // 6 digit OTP
        
        // Store the OTP in session storage (for this demo purpose)
        sessionStorage.setItem('otp', otp);

        alert(`OTP sent: ${otp}`); // This would be replaced with actual SMS sending logic.
        
        document.getElementById('otp-section').style.display = 'block';
        document.getElementById('send-otp').disabled = true;
    } else {
        alert('Please enter a valid mobile number.');
    }
});

document.getElementById('verify-otp').addEventListener('click', function() {
    const enteredOtp = document.getElementById('otp').value;
    const storedOtp = sessionStorage.getItem('otp');

    if (enteredOtp === storedOtp) {
        alert('OTP verified successfully!');
        // Redirect to index.html or the main page
        window.location.href = 'index.html';
    } else {
        alert('Incorrect OTP. Please try again.');
    }
});
