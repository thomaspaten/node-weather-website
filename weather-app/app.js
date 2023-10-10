const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (address === undefined) {

  return console.log("Please provide an address")

} else {

  geocode(address, (error, {latitude, longitude, label} = {} ) => {

    if (error) {
      return console.log(error);
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      };
      
      console.log(label);
      console.log(forecastData);
  
    });
  });
  
}

