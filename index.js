const { Markup } = require('telegraf')
const bot = require("./token")
const { start, datE } = require("./keyborad")
const { tell_people, Z } = require("./horatxkon")

bot.start(ctx => ctx.reply(`Привет, ${ctx.message.from.first_name}`, datE()))
bot.hears("Get your destiny", ctx => ctx.reply('Here you can find out what awaits you today', start()))
bot.hears(Z, ctx => ctx.reply(tell_people(ctx.message.text)))
