const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=371600bcb4c0e25d809cc03107aa2881&query=&units=m&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error",(error) => {
  console.log('an error: ', error);
});

request.end();
