import axios from 'axios';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const DEFAULT_MESSAGE = 'Cambios realizados en el la pagina';

async function sendTelegramMessage() {
    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: DEFAULT_MESSAGE
            }
        );
        console.log('Mensaje enviado:', response.data);
    } catch (error) {
        console.error('Error al enviar el mensaje:', error.response.data);
    }
}

sendTelegramMessage();
