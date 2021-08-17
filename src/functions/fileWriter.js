const fs = require("fs")
const generators = require("./generators")

function writeFile(date, firstName, lastName, fullName, phone, phoneDDD, phoneDDI, UUID, email, loop){
    let result = []

    for(let i = 0; i < 3; i++){
        let currentObject = {}
        
        if(date == true){
            currentObject.date = generators.generateDate()
        }
        if(firstName == true){
            currentObject.firstName = generators.generateFirstName()
        }
        if(lastName == true){
            currentObject.lastName = generators.generateLastName()
        }
        if(fullName == true){
            currentObject.fullName = generators.generateFullName()
        }
        if(phone == true){
            currentObject.phone = generators.generatePhone()
        }
        if(phoneDDD == true){
            currentObject.phoneDDD = generators.generatePhoneDDD()
        }
        if(phoneDDI == true){
            currentObject.phoneDDI = generators.generatePhoneDDI()
        }
        if(UUID == true){
            currentObject.UUID = generators.generateUUID()
        }
        if(email == true){
            currentObject.email = generators.generateEmail()
        }
        result.push(currentObject)
        console.log(result)
    }
    fs.writeFileSync("./test.json", JSON.stringify(result, undefined, 4), (err) =>{ console.log(err)})
}

//writeFile(true, false, false, false, false, false, false, false, false, 3)

module.exports = {
    writeFile
}