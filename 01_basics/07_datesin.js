//Dates

let myDate = new Date();
// console.log(myDate.toString);
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);
let myCreateDate = new Date (2023,0,23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());
let myCreteDate1 = new Date ("2023-01-14");
console.log(myCreteDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/10000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{   //ctrl + space ( all keywords )
    weekday: "long"
})





