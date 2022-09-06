const { Telegraf } = require('telegraf')
const bot = new Telegraf('') // 
console.log("In this bot you can find out more information about your sign and what we are waiting for you today")
bot.launch()
module.exports = bot




