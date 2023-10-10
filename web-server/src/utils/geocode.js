const request = require('request');

const geocode = (address, callback) => {

  const url = `http://api.positionstack.com/v1/forward?access_key=51f3c6cd00bd9a16850addec0ff54820&limit=1&query=${address}`;
  
  request({ url, json: true }, (error, {body}) => {
  
    if (error) {
      callback('Unable to connect to location services!', undefined);
  
    } else if (body.error || body.data.length === 0) {
      callback('Unable to find location, try another search', undefined);
  
    } else {
  
      const {label, latitude, longitude} = body.data[0];

      callback(undefined, {
        label,
        latitude,
        longitude
      })
    };
  
  });
  
  };

  module.exports = geocode;
