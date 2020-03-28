const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2d3f54d8f10a435db9afb3116cf2fc35/' + longitude + ',' + latitude + '?units=si&lang=ka'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Could not connect to weather service.')
        } else if (body.error) {
            callback('Could not find location.')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast