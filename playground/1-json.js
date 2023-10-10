const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');

const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

data.name = "Thomas";
data.age = 33;

fs.writeFileSync('1-json.json', JSON.stringify(data));
