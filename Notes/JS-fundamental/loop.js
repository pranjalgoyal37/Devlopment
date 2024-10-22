// nullish Coalescing Operator (??):null undefined

let val1;

val1 = 10 ?? 15
console.log(val1);  //10


val1 = null ?? 10
console.log(val1);  // 10

val1 = undefined ?? 15
console.log(val1);  //15

val1 = null ?? undefined
console.log(val1);

// =========================loops
// for loop
// while loop
// do while Loop
//  for each loop
// for in loop 
// for of loop 

for (let index = 0; index < 10; index++) {
  const element = index
  console.log(element);

}
let index = 0;
while (index < 10) {
  console.log(index++);
}
// const count =10 ;// error its value is fixed we can't change it
let count = 10;
do {
  console.log("atr least one time execute");
  count++;

} while (count <= 10);

/* for of loop   
  -> it is for array not obj(b/c obj is not iterable) 
  -> it is also iterate the map (each entry in form of array)

*/const prices = [1, 23, 3, 4, 4,]
for (const price of prices) {
  console.log(price);
}

const myobj = { name: "Naman", age: 23 };

// for (const key of myobj) {  // myObj is not iterable
//   console.log(key);
// }

//  in map duplicate are not allowed
const map = new Map()
map.set("name", "Naman")
map.set("age", 23)
console.log(typeof map); // object

for (const key of map) {
  console.log(key);   // [ 'name', 'Naman' ] [ 'age', 23 ]

}
for (const [key, value] of map) {
  console.log(key);    //  name age
  console.log(value); // Naman  23 

}


const shortCut = {
  js: "java-Script",
  cpp: "c++",
  python: "python"
}
for (const key in shortCut) {
  console.log(key)  // js cpp python
  console.log(shortCut[key])  // java-script c++ python

}
const arr = [1, 2, 23, 43, 4, 5]
for (const key in arr) {
  console.log(key);   // 0,1,2,3,4,5,
  console.log(arr[key]); // 1,2,23,43,4,5
}


//  for each loop 
//  it is used for array and map
//  it is also used for object but it is not recommended
// it not return anything

const coding = ['js', 'python', 'java']
coding.forEach(function (item) {
  console.log(item); // js python java
})
coding.forEach((item) => {
  console.log(item); // js python java
})
coding.forEach((item, index, arr) => {
  console.log(item, index, arr); // js python java
})

const myCoding = [
  {
    languageName: "javascript",
    extension: ".js"

  },
  {
    languageName: "Python",
    extension: ".py"

  }
]

myCoding.forEach((item) => {
  console.log(item.languageName); // [object object],[object object]
})