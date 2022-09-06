const { Telegraf } = require('telegraf')
const bot = new Telegraf('Paste here your token that you will receive from @BotFather') // 

console.log("In this bot you can find out more information about your sign and what we are waiting for you today")
bot.launch()
module.exports = bot




