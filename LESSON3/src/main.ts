let stringArr = ['one', 'hey', 'Dave']
let guitars = ['Start', 'Les Paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')
// console.log(stringArr)

// guitars[0] = true // can't coz the type
guitars[0] = 1984
guitars.unshift('Jim')
// console.log(guitars)

// guitars = stringArr
// stringArr = guitars // Error
let test = []
let bands: string[] = []
// bands.push(true) // Error
bands.push('Van')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]

// mixed = myTuple
// myTuple = mixed // Error
// myTuple[3] = 32 // Error
// myTuple[2] = 2 // Error
myTuple[1] = 42

// Objects
let myObj: object
myObj = []
// console.log(typeof myObj)
myObj = bands
myObj = {}
// console.log(myObj)

const exampleObj = {
  prop1: 'Dave',
  prop2: true,
}

// console.log(exampleObj)
exampleObj.prop1 = 'John'
// console.log(exampleObj)

// type Guitarist = {
//   name: string
//   active?: boolean // ? means optional, check intellisense
//   albums: (string | number)[]
// }

interface Guitarist {
  name?: string
  active: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false, // Try comment this, check intellisense
  albums: [1984, 'WW']
}

let jp: Guitarist = {
  // name: 'Jim',
  active: true,
  albums: ['I', 'II']
}

// evh = jp
// evh.years = 40 // Can't just add another prop
// console.log(evh)
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name?.toUpperCase()}!`
  }
  return `Hello!`
}
// console.log(greetGuitarist(jp))

// Enums
// Unlike most TypeScript features,
// Enums aren't a type-level addition to JS
// but something added to the language and runtime.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)