console.log('\x1b[36m%s\x1b[0m','*R U N N I N G*')

//Functions that generate data
const generators = require("./src/functions/generators.js")
//Test Values
console.log(generators.generateDate());
console.log(generators.generateFirstName())
console.log(generators.generateLastName())
console.log(generators.generateFullName())
console.log(generators.generatePhone())
console.log(generators.generatePhoneDDD())
console.log(generators.generatePhoneDDI())
console.log(generators.generateUUID())