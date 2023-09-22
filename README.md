Installation Steps:
Prerequisites:
Ensure you have Node.js, npm (Node Package Manager), Python 3, and pip installed on your system.
You need git for cloning the repository.
**Steps**:
1. Clone the repository:

git clone https://github.com/marufrigan/OTPcatcher.git

2. Navigate to the directory:

cd OTPcatcher

3 Install Node.js dependencies:

npm install

4) Set up a Python virtual environment and activate it:

python3 -m venv venv
source venv/bin/activate

5) Install Python dependencies:

bash
Copy code
pip install -r requirements.txt
Running the Server:

bash
Copy code
node server.js
Running the Client on another terminal (For attackers):

bash
Copy code
python3 client.py
Customizing the URL:

While your server will be running on http://localhost:3000 by default, in a real-world scenario, you'd want a catchy or deceptive URL. For this, you might consider services like bit.ly to shorten and customize your link.
For a more advanced approach, consider using a domain registrar to buy a domain that resembles a popular service. Combine this with a reverse proxy to direct traffic to your phishing site.
Designing a Deceptive Page:

Update the landing page in the server.js file to resemble a popular social media site's login page.
Prompt the user to enter an OTP, stating it's for verification purposes.
Deploying (Advanced):

To reach external victims (in ethical scenarios), you need to deploy your phishing site. Consider using services like Heroku, DigitalOcean, or any cloud platform to host your node application.
Ensure you set up the necessary environment variables and configurations for deployment.
Usage:
Attacker:

Start both the server and client.
Share the deceptive link with the victim (ensure you have permission).
Monitor the client.py terminal to capture any entered OTPs.
Victim:

The victim receives a deceptive link, prompting them to verify their account or access exclusive content.
Upon clicking and reaching the phishing page, they might be prompted to log in and then enter an OTP.
Once entered, the OTP is captured and displayed on the attacker's client.py terminal.
WARNING: This tool is for educational purposes only. Unauthorized attacking and phishing are illegal. Always obtain explicit permission. Ensure you educate users about such attacks to raise awareness, rather than misusing the tool.# OTPCatcher

This project demonstrates how an OTP, entered on a website, can be intercepted by a third-party program. It's designed to raise awareness about the importance of cybersecurity.

## Setup

1. Clone this repository:
