const { Telegraf } = require('telegraf')
const bot = new Telegraf('Here you must put the token that you will receive from @BotFather') //

console.log("I am Horoscope_bot who will tell you what awaits you today")
bot.launch()
module.exports = bot




