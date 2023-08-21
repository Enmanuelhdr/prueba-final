import axios from 'axios';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const DEFAULT_MESSAGE = 'Hola desde GitHub Actions!';
const ERROR_MESSAGE = process.env.ERROR_MESSAGE;

async function sendTelegramMessage() {
    let messageToSend = DEFAULT_MESSAGE;

    if (ERROR_MESSAGE) {
        messageToSend = ERROR_MESSAGE;
    }
    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: messageToSend
            }
        );
        console.log('Mensaje enviado:', response.data);
    } catch (error) {
        console.error('Error al enviar el mensaje:', error.response.data);
    }
}

sendTelegramMessage();
