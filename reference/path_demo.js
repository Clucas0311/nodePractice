// import existing file
const path = require('path');

// Base File Name -- give you the base filename
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);
