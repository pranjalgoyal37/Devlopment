const mySymbol = Symbol("key1") 

const obj = {
  name: 'John',
  mySymbol : "myKey1",   // it is not symbol it act as String 
  [mySymbol] : "myKey2",
  age: 30,
  student :['ram','shyam'],
  address:{
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
    }
}

//  access this object
console.log(obj.name);
console.log(obj["name"]); 
console.log(obj.mySymbol);
console.log(obj[mySymbol]);


obj.greeting = function(){
  console.log(`hello ${this.name}` );
} 
console.log(obj.greeting);  //[Function (anonymous)]

console.log(obj.greeting());  // hello john undefined  


// freeze the obj value 
console.log(obj);

obj.name = "raman"
console.log(obj);  // name is change (John to raman)

Object.freeze(obj)  // we can not change any value in this obj
obj.name =  "Pranjal"
console.log(obj);

// +++++++++++++ singleton obj ++++++++++++++++++

const tinderUser = new Object()  // singleton obj
const tinderUser2 ={}   // non- singleton obj
tinderUser.email = "abc@gmail.com"
tinderUser.name = "jhon"
console.log(tinderUser);
console.log(tinderUser.email);
console.log(tinderUser.name?tinderUser.name:"not found");

const obj1 = {1:"a",2:"b"}
const obj2 = {4:"c",3:"d"}

const obj3 = {obj1,obj2} 
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'd', '4': 'c' } }

// let obj4 =  Object.assign(obj1,obj2)
let obj4  = {... obj1 , ...obj2, ...obj3};
console.log(obj4);

console.log(Object.keys(obj1));  [1,2]
console.log(Object.values(obj1));[ '1', '2']  // [ 'a', 'b' ]


console.log(Object.entries(obj1));  // [ [ '1', 'a' ], [ '2', 'b' ] ]

console.log(obj1.hasOwnProperty('isLoog')); false
console.log(obj1.hasOwnProperty('1')); // true


const course ={
  courseName : "JavaScript",
  courseDuration : 30,
  courseFees : 5000,
  courseInstructor : "hitesh"
}

// course.courseInstructor  => hitesh

const {courseInstructor :Instructor} = course   // object Destructuring
 console.log(Instructor);  /// => hitesh 







