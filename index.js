const axios = require("axios");
require("dotenv").config();
const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// TEMPORARY DEBUG MIDDLEWARE — logs every incoming event
app.use(async ({ payload, next }) => {
  console.log("Incoming event:", JSON.stringify(payload).slice(0, 200));
  await next();
});

app.command("/myfirstbot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/myfirstbot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/myfirstbot-ping - Check bot latency
/myfirstbot-catfact - Get a cat fact
/myfirstbot-joke - Get a joke`
  });
});

app.command("/myfirstbot-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    console.error("catfact error:", err.message);
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/myfirstbot-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text: `${response.data.setup}\n\n${response.data.punchline}`
    });
  } catch (err) {
    console.error("joke error:", err.message);
    await respond({ text: "Failed to fetch a joke." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();