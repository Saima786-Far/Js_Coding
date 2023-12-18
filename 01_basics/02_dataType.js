"use strict"; // treat all JS code as newer version .
//alert("Hello JavaScript");//we are using node.js.not browser
console.log(3 + 
    5);
//code readability should be high 
console.log("Saima");
//tc30 MDN Go through should be Important 

let name ="Saima" 
let age ="23" 
// let isLoggedIn = False; 
let city = undefined;
let area = null;

//Primitive data type
//number
//bigInt
//string
//boolean
//null Standalone value ;null is type (null is a object)
//undefined
//symbol (unique find) 


//object

console.log(typeof age);
console.log(typeof city);//undefined
console.log(typeof area);//object
//practise
//Primitve 7 Datatype  string, number, boolean, null, undefined, symbol, BigInt
//Reference type (Non primitive) Array, Object, function


//number

let length =34;
let weight = 56;
//strings
let color ="yellow";
let lastName ="Saima";
//Boleans
let x= true;
let y= false;
//object
const person = {
    firstName : "Saima",
    lastnane : "farheen",
    age : "23",
    staus : "single"

};
//array object 
const cars=["mercedes", "safari", "alto", "BMW"]
//Date object 
const date = new Date ("2022-03-25");

//function 
const myFunction = function(){
    console.log("Hello world");
}

//BigInt
const bigNumber = 12345678987654n;

//Memory 
//Stack memory-> primitive memory (Duplicate , Copy)
//Heap Memory -> Non - primitive (Reference)
let myYouName = "Saimafarheencom"
let anotherName = myYouName
anotherName = "Farheen"
console.log(myYouName)
console.log(anotherName)

let userOne ={
    email: "saimafarheen.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "Saimasayeed.com"

console.log(userOne.email);
console.log(userTwo.email);
