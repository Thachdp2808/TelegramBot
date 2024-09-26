// TelegramBot.ts
import { Telegraf } from 'telegraf';

const bot = new Telegraf('7805244082:AAEj-orEweopmkJQ8LMqmQfEmE_GpJr9QDg'); // Thay thế 'YOUR_BOT_TOKEN' bằng token của bạn

// Lệnh để yêu cầu số điện thoại
bot.command('get_phone', (ctx) => {
  ctx.reply('Please share your phone number:', {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Share phone number",
            request_contact: true, // Yêu cầu số điện thoại
          }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    }
  });
});

// Xử lý khi người dùng gửi số điện thoại
bot.on('contact', (ctx) => {
  const contact = ctx.message.contact;
  const phoneNumber = contact.phone_number;
  ctx.reply(`Your phone number is: ${phoneNumber}`);
  console.log(`Received phone number: ${phoneNumber}`); 
});

// Khởi động bot
bot.launch();

export default bot;
