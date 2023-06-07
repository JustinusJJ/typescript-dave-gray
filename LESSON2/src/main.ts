let myName: string = 'Dave'
let meaningOfLife: number;
let isLoading: boolean;
// let album: any;
let album: string | number; // Union Type

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

const sum = (a: number, b: string) => {
  return a + b // concat
}

let postId: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g