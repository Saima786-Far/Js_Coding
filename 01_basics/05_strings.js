// single quote, double quote ('', " ") ${}=> string interpolation, ``=> backtick

const name = "Saima"
const repoCount = 39
//console.log(name + repoCount + "Value")

console.log(` hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Farheen Saima')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-8, 6);
console.log(anotherString);
 
const newStringOne = "      saima      "
console.log(newStringOne);
console.log(newStringOne.trim()); // cut the space
 

const url = "https://saima.com/saima%20sayeed"

console.log(url.replace('%20', '-'));
console.log(url.includes('farheen'));


console.log(gameName.split('-'));



