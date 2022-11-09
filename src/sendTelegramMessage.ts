import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

function sendTelegramMessage(message: string) {
  axios.post(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    },
  );
}

export { sendTelegramMessage };
