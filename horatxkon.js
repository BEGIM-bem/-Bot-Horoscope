const { filter } = require('./token')
const bot = require('./token')
module.exports.Z = ['Aries', "Taurus", 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius',
    'Capricorn', 'Aquarius', 'Pisces']

module.exports.tell = {}
const axios = require("axios");
var request = require('request');

let result = 'Please try again'

module.exports.tell_people = (day) => {
    let res

    async function makeRequest() {
        let name = day.toLowerCase()

        const config = {
            method: 'POST',
            url: `https://aztro.sameerkumar.website/?sign=${name}&day=today`
        }
        res = await axios(config)
        console.log(res.status);
        console.log(res.data.description)
        result = await res.data.description
    }

    makeRequest()
    return result

}