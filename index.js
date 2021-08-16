console.clear()
console.log('\x1b[36m%s\x1b[0m','*R U N N I N G*')

//Functions that generate data
const generators = require("./src/functions/generators.js")
//Test Values

//Date
console.log(generators.generateDate());
//First name
console.log(generators.generateFirstName())
//Last name
console.log(generators.generateLastName())
//Full name
console.log(generators.generateFullName())
//Phone
console.log(generators.generatePhone())
//Phone with DDD
console.log(generators.generatePhoneDDD())
//Phone with DDD and DDI
console.log(generators.generatePhoneDDI())
//UUID
console.log(generators.generateUUID())
//email