console.log("hiii");

// variables
// 1) -const  --> value not change
// 2) - var   --> 
// 3) -let    --> 

/* Flase values
    false,0,-0,BigInt 0n,"",null undefined,Nan
*/
// Truthy values
//  "0" ,'flase' ," " ,[] ,{}.function(){}


const accountId = 101;
var accountName = "Rahul";   // prefer not to use b/c of issue in block
let accountCity = "Agra";
let accountState;    //  --> undefined

// Note -> we can define variable without let and const but it not good practice
age = 90;

console.table([accountId, accountName, accountCity, accountState, age]);

// accountId =102;    Error b/c it is constant 
accountName = "Pranjal Goyal";
accountCity = "Mathura"
accountState = "Utter Pradesh"
age = 100;
console.table([accountId, accountName, accountCity, accountState, age]);
console.log(`Hello my name is ${accountName} i am live in ${accountCity} `)

// ============================= Data type ==============
// primitive (stack memory)
// 7 type :- String ,Number,Boolean,null undefined Symbol,BigInt

// reference type(heap memory) :=> Array, Object,Function

// 1) - Number => 2 to power 53 
// 2) - String => "anything"
// 3) - Boolean  => true false
// 4) - Null  ==> standalone value 
// 5) - Undefined  ==> not defined 
// 6) - symbol  => unique
// 7)-  Big Int => it use in scientific value 

// Note we check the type by typeof ==>typeof null

// ========         conversion ===========
// "33" => 33       Number("33")  => 33
// "33abd"=> Nan    Number("33abd") => NaN - not a number
// null => 0        Number(null) => 0
// undefined => Nan  Number(undefined) => NaN


// true =>1 or false =>0
// boolean conversion boolean(0)



// "" => false 
// "hitesh" => true

let score = "33"
let num = Number(score)
console.log(num);  // 33
console.log(typeof num)           // Number
console.log(Number(true))         // 1
console.log(Number(undefined));   // NaN 
console.log(Number(null));        // 0
console.log(Boolean(""))          // false
console.log(Boolean("PG"));       // true
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN))         // false

//it allow unique 
const id = Symbol(23)
const anotherId = Symbol("23");
console.log(id == anotherId);

console.log(id);
console.log(anotherId);
console.log(typeof id);



// reference type (Heap area)
// array => []
// object => {}
// function

const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
  name: "hitesh",
  age: 23,
  isMarried: false,
  friends: ["Pranjal", "nagraj"],
  students: {
    id: 101,
    name: "Ravi",
    age: 20,
    course: "JS"
  }
}

const myFunction = function () {
  console.log(typeof myFunction);
}
console.log(myFunction())



// =========================== Operation ===============

console.log(+true);  // 1 convert boolean to number
num = (+true);
console.log(typeof num);   // number

console.log("2" > 1); //true
console.log("02" > 1); //true  convert string "02" to number 2

// *Note** it is not recommended try to compare both same data type 

console.log(null > 0); // null convert in number null -> 0 and 0>0 => false
console.log(null == 0); // flase  here conversion is not perform
console.log(null >= 0); //true

// same in undefined it give false in all case 
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false



console.log(null == undefined); // true

// ===========================  === vs == ======================  
// in == conversion is automatically perform 
// in === no conversion is perform
console.log(1 == "1"); // true  1==1
console.log(1 === "1"); // false  1=="1"




// ======================String===============================
// string is immutable in js
// string is collection of character

const str1 = "hitesh"   // string type
const teaherName = new String("hitesh")    // object type
// both are same 


console.log(str1[1]); // i  we access 1st keys of str object.
console.log(str1.length); // 6
console.log(str1.charAt('3'));
console.log(str1.substring(-4, 2)); // negative is not allowed it escape and consider as  0 
console.log(str1.slice(0, 2)); // same as substring

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '')); //https://hitesh.com/hiteshchoudhary
console.log(url.split('/')); // [ 'https:', '', 'hitesh.com', 'hitesh%20choudhary' ]


// == == = = == = = = number and Math = = = =  = = = =
// number is primitive data type in js
// number is immutable in js

const num1 = 100    // number
const balance = new Number(100)   //object
console.log(num1 == balance); // true
console.log(num1 === balance); // false   

console.log(balance)
console.log(balance.toString().length);  // 3
console.log(balance.toFixed(4)); 100.0000

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000 by default US standard

// +++++++++++++++++++++++  Maths  ++++++++++++++++++++
const pi = Math.PI
console.log(pi);  //3.141592653589793
const negativeNumber = -9
console.log(Math.abs(negativeNumber));  //9
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9));  // 4
console.log(Math.round(4.8));  // 5
console.log(Math.round(4.4));  // 4
console.log(Math.min(4, 4, 2, 3, 4, -9, 0)) - 9

console.log(Math.random()); // 0.22608993049964976  ==> range 0 to 1 
console.log(Math.random() * 100 + 1);  // range 0 to 100(100 inclusive) . 1 is for avoid 0 (1-00)

console.log(Math.pow(2, 3));  // 8

// ====================== date and API == = = = = = = = 
// date is object in js

const date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toLocaleDateString('en-IN')); //   15/8/2024
console.log(`Date is ${date.getDate()} and month is ${date.getMonth()} and year is ${date.getFullYear()},time is ${date.getHours()} minute is ${date.getMinutes()}`);





let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am
console.log(myCreatedDate.toDateString());  // Mon jan 23 2023
console.log(myCreatedDate.getTime());       //  time in millisecond

let myTimeStamp = Date.now()

console.log(Math.floor(Date.now() / 1000)); // time in second








