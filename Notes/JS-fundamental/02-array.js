// Array is the obj in js which store collection of  multiple items under a single variable  

const myArr = [0, 1, 2, 3]
const myArr2 = [4, 5, 6]
// console.log(myArr[1]);
// console.log(myArr.length);
// console.log(myArr);

//  +++++++++++  methods of Array ++++++++
// 1. push() : add item at the end of array return length of array
console.log(myArr.push(10))  // 4  new length . [0,1,2,3,10]
console.log(myArr.push(myArr2)) // 6 [0,1,2,3,[4,5,6]]
console.log(myArr.concat(myArr2)); // 6 [0,1,2,3,4,5,6]
let newCombineArray = [...myArr, ...myArr2]  // [0,1,2,3,4,5,6]
console.log(newCombineArray);

// 2. pop() : remove item from the end of array return last item
console.log(myArr.pop()); // 10 

// 3. shift() : remove item from the start of array return item
console.log(myArr.shift());  // 0 

// 4. unshift() : add item at the start of array  
console.log(myArr.unshift(9));




console.log("=======new array ");
const arr2 = new Array(1, 8, 37, 5, 6, 1)
// 12. slice() : get part of array
console.log(arr2.slice(1, 3)); // [8,37]  last index is not include and original  array is asitis .

// 5. splice() :  slice the array and remove the sliced array in original 
const arrOrignal = [1, 2, 3, 4, 5]
let sliceArray = arrOrignal.slice(1, 3) // 2,3
console.log(arrOrignal);  // 1,2,3,4,5

let spliceArray = arrOrignal.splice(1, 3) // 2,3,4
console.log(`slice array is ${spliceArray} and splice array is ${spliceArray}`);
console.log(arrOrignal); // 1,5



// 6. sort() : sort array in ascending or descending order
console.log(arr2.sort());

// 7. reverse() : reverse array
console.log(arr2.reverse()); // [ 8, 6, 5, 37, 1, 1 ]

// 8. indexOf() : find index of item in array
console.log(arr2.indexOf(1))  // 4

// 9. lastIndexOf() : find last index of item in array
console.log(arr2.lastIndexOf(1)); // 5
console.log(arr2.lastIndexOf(10)); // -1 not present so it return -1

// 10. join() : join array in string (convert in string)
let stringedArray = myArr.join("--");  // 9--1--2--3



// 11. concat() : join two array in one array
console.log(`1st array is:- ${myArr} and second array is ${arr2}`);
let concatArray = myArr.concat(arr2)
console.log(concatArray) //[9, 1,  2, 3, 8,6, 5, 37, 1, 1 ]


const naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8]

// 13. forEach() : loop through array 
// 14. map() : create new array from existing array


// 15. filter() : filter array based on condition
console.log(naturalNumber.filter((num) => (num % 2 == 0)));
// 16. reduce() : reduce array to single value
// 17. some() : check if any item in array is true
// 18. every() : check if all item in array is true
// 19. find() : find item in array based on condition
// 20. findIndex() : find index of item in array based on condition

// flat()
let multiArray = [1, 2, 3, 4, 5, [6, 7, 8, 9], [4, 5, 6], [7, 8, 9]]
console.log(multiArray.flat(1)); // [1,2,3,4,5,6,7,8,9,4,5,6]

console.log(multiArray.flat(Infinity)) // [1,2,3,4,5,6,7,8,9,4,5,6]


//   note 

console.log(Array.isArray("hitesh")); // flase
console.log(Array.isArray(myArr)); // true
console.log(Array.from("Hitesh"));  // [ 'H', 'i', 't', 'e', 's', 'h' ]

let score1 = 100
let score2 = 90
let score3 = 100
console.log(Array.of(score1, score2, score3));


