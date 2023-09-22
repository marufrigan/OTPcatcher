const express = require('express');
const app = express();
const http = require('http').createServer(app);  // Move this line after defining 'app'
const io = require('socket.io')(http);
const PORT = 3000;

// Middleware to parse POST requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<form action="/generateOtp" method="POST"><input type="email" name="email" placeholder="Email" required/><br/><input type="text" name="phone" placeholder="Phone Number" required/><br/><button type="submit">Generate OTP</button></form>');
});

app.post('/generateOtp', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);
    io.emit('otp', { otp: otp });  // Emit the OTP to connected clients
    res.send(`OTP sent to ${req.body.phone}`);
});

http.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
