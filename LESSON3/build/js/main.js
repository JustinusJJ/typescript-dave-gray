"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
// console.log(stringArr)
// guitars[0] = true // can't coz the type
guitars[0] = 1984;
guitars.unshift('Jim');
// console.log(guitars)
// guitars = stringArr
// stringArr = guitars // Error
let test = [];
let bands = [];
// bands.push(true) // Error
bands.push('Van');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
// mixed = myTuple
// myTuple = mixed // Error
// myTuple[3] = 32 // Error
// myTuple[2] = 2 // Error
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
// console.log(typeof myObj)
myObj = bands;
myObj = {};
// console.log(myObj)
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
// console.log(exampleObj)
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 'WW']
};
let jp = {
    // name: 'Jim',
    active: true,
    albums: ['I', 'II']
};
// evh = jp
// evh.years = 40 // Can't just add another prop
// console.log(evh)
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return `Hello!`;
};
// console.log(greetGuitarist(jp))
// Enums
// Unlike most TypeScript features,
// Enums aren't a type-level addition to JS
// but something added to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
