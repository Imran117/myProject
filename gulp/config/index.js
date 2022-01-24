const fs = require('fs');
const path = './gulp/tasks';
const pathArray = fs.readdirSync(path).map(file => `${path}/${file}`);

module.exports = pathArray;
