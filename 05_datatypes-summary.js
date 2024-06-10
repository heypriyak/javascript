//primitive  data types
// 7 types: string.number, boolean,null,undefined,symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//false

//const bigNumber = 345654789456123456n

//reference type(non premitive)

//array,objects,functions
  
  const heros = ["shaktiman", "naagraj", "doga"];
    let myObj={
    name: "hitesh",
        age: 22,
            
}
const myFunction = function () {
    console.log("Hello world");

}
console.log(typeof myFunction); //undefined
//value of outsidetemp is object and scorevalue is number.

//myfunction ka function aata hai
//****************************** */

//stack(primitive),heap(Non-primitive)
let myYoutubename = "priya"

let anothername = myYoutubename
anothername = "supriya"
console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@byl"
}

let userTwo = userOne
userTwo.email = "priya@google.com"

console.log(userOne.email)
console.log(userTwo.email)

