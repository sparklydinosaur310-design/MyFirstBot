# MyFirstBot
I made a slack bot that is definitely NOT slacking off as it is working 24/7. I built this bot with Node.js and currently has 3 different commands that you can run effortlessly. I spent just around less than an hour fixing the code and making sure it worked. I hope you can try it out and have fun!❤️(●'◡'●)
## Bot Demonstration 
<img width="1919" height="875" alt="Screenshot 2026-09-12 000921" src="https://github.com/user-attachments/assets/0b910c70-5a7a-456e-9d46-5a3bf5fa1c1e" />

## HOW TO SETUP THE BOT
Follow these steps to setup the bot locally or on your own server:
### Prerequisites:
Node.js (v18 or higher).
npm (node package manager).
A slack app, created in the SLACK API dashboard with socket mode activated.
### Installation
Put these codes into your terminal/powershell, one at a time.
   
   
git clone [https://github.com/sparklydinosaur310-design/MyFirstBot.git](https://github.com/sparklydinosaur310-design/MyFirstBot.git)
  
   
cd MyFirstBot


### Now, we have to install dependencies.

npm init -y


npm install @slack/bolt dotenv axios

### Now, we need to create a .env file in the root directory.

nano .env

### Add your slack api keys to the file like this, delete the -your-bot-token and -your-app-token and add in your tokens.

SLACK_BOT_TOKEN=xoxb-your-bot-token

SLACK_APP_TOKEN=xapp-your-app-token

### Now exit the file and run the bot using this code

node index.js
