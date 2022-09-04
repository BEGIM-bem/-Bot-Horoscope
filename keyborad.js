const { Markup, } = require('telegraf')
const { telegram } = require('./token')

module.exports.start = () => {
    return Markup
        .keyboard([

            ['Aries', "Taurus", 'Gemini', 'Cancer'],
            ['Leo', 'Virgo', 'Libra', 'Scorpio'],
            ['Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],


        ])
        .resize()
}

module.exports.datE = () =>
    Markup
        .keyboard([
            ["Get your destiny"]
        ])
        .resize()
