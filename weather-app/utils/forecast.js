const request = require('request');

const forecast = (latitude, longitude, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=371600bcb4c0e25d809cc03107aa2881&query=&units=m&query=${latitude},${longitude}`;
  
  request.get({url, json:true}, (error, {body}) => {
   
    if(error) {
    
      callback('Unable to connect to weather service!', undefined);
   
    } else if(body.error) {
   
      callback("Unable to find location", undefined);
   
    } else {
   
      const {weather_descriptions, temperature, feelslike} = body.current;
   
      callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`);
   }
  }) 

};

module.exports = forecast;

