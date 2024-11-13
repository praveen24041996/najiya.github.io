// Backend (Node.js with Express and Twilio)

const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3000;

app.use(express.json());

// Twilio setup (make sure to replace with your actual Twilio account SID, Auth Token, and phone number)
const twilioClient = twilio('your_account_sid', 'your_auth_token');
const twilioPhoneNumber = 'your_twilio_phone_number';

// Temporary store for OTPs (In a real-world scenario, use a database)
let otpStore = {};

// Send OTP endpoint
app.post('/send-otp', (req, res) => {
    const { phone } = req.body;

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Store OTP temporarily (should be in a database)
    otpStore[phone] = otp;

    // Send OTP via SMS using Twilio
    twilioClient.messages.create({
        body: `Your OTP is: ${otp}`,
        to: phone,  // user phone number
        from: twilioPhoneNumber
    })
    .then((message) => {
        res.json({ status: 'success' });
    })
    .catch((err) => {
        console.error(err);
        res.json({ status: 'error', message: 'Failed to send OTP' });
    });
});

// Verify OTP endpoint
app.post('/verify-otp', (req, res) => {
    const { otp, phone } = req.body;

    // Check if OTP is correct
    if (otpStore[phone] && otpStore[phone] === parseInt(otp)) {
        // OTP is valid
        res.json({ status: 'success' });
    } else {
        // OTP is invalid
        res.json({ status: 'error', message: 'Invalid OTP' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${
