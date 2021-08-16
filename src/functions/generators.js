//Basic functions
const getRandomNumber = require("./basicFunctions").getRandomNumber

//Dependencies
const { v4: uuidv4 } = require('uuid')

//Data Generators
function generateDate() {
    let day = getRandomNumber(1, 28);
    let month = getRandomNumber(1, 12);
    let year = getRandomNumber(2010, 2022);
    return `${day}/${month}/${year}`;
};

function generateFirstName() {
    let firstNames = require("../lists/firstNames.json");
    let selector = getRandomNumber(0, firstNames.length - 1);
    let result = firstNames[selector];
    return result;
};

function generateLastName() {
    let lastNames = require("../lists/lastNames.json");
    let selector = getRandomNumber(0, lastNames.length - 1);
    let result = lastNames[selector];
    return result;
};

function generateFullName() {
    let firstName = generateFirstName();
    let lastName = generateLastName();
    return `${firstName} ${lastName}`;
};

function generatePhone(lenght = 9) {
    let fullnumber = [];
    for (i = 0; i < lenght; i++) {
        let number = getRandomNumber(0, 9);
        fullnumber.push(number);
    }
    return fullnumber.join("");
};

function generatePhoneDDD(lenght = 9) {
    let fullnumber = [];
    let ddd = 0;

    for (i = 0; i <= lenght; i++) {
        let number = getRandomNumber(0, 9);

        if (i == (lenght - 4)) {
            fullnumber.push("-");
        }
        else {
            fullnumber.push(number);
        }
    }
    let number = getRandomNumber(11, 99);
    ddd = number;

    return `(${ddd})${fullnumber.join("")}`;
};

function generatePhoneDDI(lenght = 9) {
    let fullnumber = [];
    let ddd = getRandomNumber(11, 99);
    let ddi = getRandomNumber(11, 999);

    for (i = 0; i <= lenght; i++) {
        let number = getRandomNumber(0, 9);
        if (i == (lenght - 4)) {
            fullnumber.push("-");
        }
        else {
            fullnumber.push(number);
        }
    }

    return `+${ddi}(${ddd})${fullnumber.join("")}`;
};

function generateUUID(){
    let uuid = uuidv4()
    return uuid
}
function generateEmail(){
    let adjectives = require("../lists/adjectives.json")
    let nouns = require("../lists/nouns.json")
    let providers = require("../lists/emailProviders.json")
    let domains = require("../lists/domains.json")
    let word1 = adjectives[getRandomNumber(0, adjectives.length - 1)]
    let word2 = nouns[getRandomNumber(0, nouns.length - 1)]
    let word3 = providers[getRandomNumber(0, providers.length - 1)]
    let word4 = domains[getRandomNumber(0, domains.length - 1)]

    return `${word1}.${word2}@${word3}${word4}`
}

module.exports = {
    generateDate,
    generateFirstName,
    generateLastName,
    generateFullName,
    generatePhone,
    generatePhoneDDD,
    generatePhoneDDI,
    generateUUID,
    generateEmail
}