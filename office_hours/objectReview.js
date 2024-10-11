// Objects (dictionaries in Python) use curly brackets
let myObj = {
    "name": "Adrian", // "key": value
    "isHappy": true,
    "favoriteNumber": 5
};

// Grab the value linked to the isHappy key
console.log(myObj.isHappy);
console.log(myObj["isHappy"]);

let key = "name";
console.log(myObj[key]); // Will work
console.log(myObj.key); // Won't work

let nasaData = {
    "date": "2024-10-10",
    "explanation": "Five bright comets are compared in these panels, recorded by a coronograph on board the long-lived, sun-staring SOHO spacecraft. Arranged chronologically all are recognizable by their tails streaming away from the Sun at the center of each field of view, where a direct view of the overwhelmingly bright Sun is blocked by the coronagraph's occulting disk. Each comet was memorable for earthbound skygazers, starting at top left with Comet McNaught, the 21st century's brightest comet (so far). C/2023 A3 Tsuchinshan-Atlas, approaching its perihelion with the active Sun at bottom center, has most recently grabbed the attention of comet watchers around the globe. By the end of October 2024, the blank 6th panel may be filled with bright sungrazer comet C/2024 S1 Atlas. ... or not.",
    "hdurl": "https://apod.nasa.gov/apod/image/2410/SohoKy3.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Five Bright Comets from SOHO",
    "url": "https://apod.nasa.gov/apod/image/2410/SohoKy3_1024.jpg"
};

let nasaData2 = {
    "date": "2024-10-10",
    "explanation": "Five bright comets are compared in these panels, recorded by a coronograph on board the long-lived, sun-staring SOHO spacecraft. Arranged chronologically all are recognizable by their tails streaming away from the Sun at the center of each field of view, where a direct view of the overwhelmingly bright Sun is blocked by the coronagraph's occulting disk. Each comet was memorable for earthbound skygazers, starting at top left with Comet McNaught, the 21st century's brightest comet (so far). C/2023 A3 Tsuchinshan-Atlas, approaching its perihelion with the active Sun at bottom center, has most recently grabbed the attention of comet watchers around the globe. By the end of October 2024, the blank 6th panel may be filled with bright sungrazer comet C/2024 S1 Atlas. ... or not.",
    "hdurl": "https://apod.nasa.gov/apod/image/2410/SohoKy3.jpg",
    "media_type": "image",
    "title": "Five Bright Comets from SOHO",
    "url": "https://apod.nasa.gov/apod/image/2410/SohoKy3_1024.jpg"
};

// How do we check to see if a key exists in an object?
// Approach I - the hasOwn static method for the Object class
console.log("Approach I for checking for a property:");
console.log(Object.hasOwn(nasaData2, "date"));
console.log(Object.hasOwn(nasaData2, "service_version"));

// Approach II - the "in" keyword
console.log("Approach II for checking for a property:");
console.log("date" in nasaData2);
console.log("service_version" in nasaData2);

let pikachuData = {
    "abilities": [
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 112,
    "cries": {
        "latest": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
        "legacy": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg"
    },
    "forms": [
        {
            "name": "pikachu",
            "url": "https://pokeapi.co/api/v2/pokemon-form/25/"
        }
    ]
};

console.log(pikachuData["abilities"]);
console.log("Looping through abilities array:")
for (const currentAbility of pikachuData["abilities"]) { // for-of loops can be used with arrays
    // console.log(currentAbility);
    // console.log(currentAbility["ability"]);
    console.log(currentAbility["ability"]["name"]); // Name of the ability
}
// console.log(pikachuData["abilities"]);