const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&appid=b2e303a17b0b966af09468db5f938297'


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.daily[0].weather[0].description+" .  It is currently "+parseInt((body.current.temp)-273)+"°C temprature and humidity is "+body.current.humidity+".")
        }
    })
}


module.exports = forecast