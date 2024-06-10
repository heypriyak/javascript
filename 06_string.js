const name = "Priya"
const repoCount = 50

//console.log(name + repoCount + "value");
//string is an object
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); 

const gameName = new String(`Priyaa-c`)
console.log(gameName[0]); //indexing
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(-7, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newStringOne = "  priya  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://priya.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))