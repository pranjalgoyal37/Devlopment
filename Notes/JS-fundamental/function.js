function greeting() {
  console.log("function files ");
}
greeting() // =  > function files


function sum(number1, number2) {
  return number1 + number2;
}
console.log(sum(3, 5))


// function as a variable
const addTow = function (num) {
  return num + 2;
}
console.log(addTow(5)) // = 7
const greeting = function () {
  console.log("Hii pranjal");

}
console.log(greeting);

greeting() // = Hii pranjal 



//  accesibilty of Function
addnumber(1, 2, 3)  // 6
function addnumber(num1, num2, num3) {
  console.log(num1 + num2 + num3)
}

addnumber(1, 2, 3)  // error  addnummber work as a data type which is not declred
const addnumber = function (num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(addnumber(1, 2, 3))

function loginUserMessage(username) {

  if (!username) {
    return "Please enter your username";
  }

  console.log("Welcome to the application");
  return `${username} just Logged in .`
}


function loginUserMessage(username = "sam") {   // default value for zero argu.
  return username
}
console.log((loginUserMessage)());
loginUserMessage()



//  rest operator :>>   "..."
function calculateCartPrice(val1, val2, ...num) {
  console.log(val1, val2, num);

  return num
}
calculateCartPrice(100, 200, 300, 4040, 500, 600, 800)

const myNewArray = [100, 2000, 300, 400, 500]

function returnSecondValue(getArray) {
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));


// function parameter as object 

const userDetail = {
  name: "sam",
  age: 25,
}
function getUserDetail(myObj) {
  return `name of the user is ${myObj.name} and age is ${myObj.age}`
}

console.log(getUserDetail(userDetail));


// ======== this in function 
const userdata = {
  name: "sam",
  age: 25,
  details: function () {
    console.log(this.name, this.age)
  }


}


//  arrow Function

const addnumber = function (num1, num2) {
  console.log(num1 + num2);

}
addnumber(5, 6)
// similar other method
const addnumberByArrow = (num1, num2) => {
  return (num1 + num2);
}
addnumberByArrow(5, 6)

//  note --> if we use curly bracket after => return is compulsory 
const addnumberByArrow02 = (num1, num2) => (num1 + num2)
console.log(addnumberByArrow02(5, 7));

// return obj  curly bracket is mandatory  inside ()
const displayName = (num1, num2) => ({ name: "Pran" })
console.log(displayName(3, 5));



/* Immediately Invoked Function Expression (IIFE)
 ->   call this function  Immediately not explicitly
  ->  ()() -> first indicate function definition and another used to call this function
  semicolon is mandatory for end this function block
*/

(function chai(name) {
  console.log("chai is very hot", name);
})();   // chai is very hot undefined

(function chai(name) {
  console.log("chai is very hot", name);
})("hitesh");   // chai is very hot undefined

(() => {
  console.log("hii");
})();


