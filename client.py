import socketio

sio = socketio.Client()

@sio.on('otp')
def on_otp(data):
    print(f"Received OTP: {data['otp']}")

sio.connect('http://localhost:3000')
sio.wait()
