import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

async function sendSlackMessage(message: string) {
  await axios('https://slack.com/api/chat.postMessage', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${process.env.SLACK_API_TOKEN}`,
    },
    data: JSON.stringify({
      channel: process.env.SLACK_APPS_ALERTING_CHANNEL,
      text: message,
    }),
  });
}

export { sendSlackMessage };
