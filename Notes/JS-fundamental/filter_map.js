// const coding = ['js', 'java', 'python']

// const values = coding.forEach((item) => {
//   console.log(item);

// })
// console.log(values); // undefined


// //  filter methods
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let newNums = myNums.filter((num) => num > 4)

//  here we open the scope so we need return keyword
// let newNum2 = myNums.filter((num) => {
//   return num > 4
// })
// console.log(newNums);
// console.log(newNum2);

// const evenNumber = myNums.filter((num) => num % 2 == 0)
// console.log(`even number is :==> ${evenNumber}`);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.publish >= 2000)
console.log(userBooks);


// ++++++++++++++ map method ++++++++++++++++++
const numbers = [1, 2, 3, 4, 5]
const newNums = numbers.map((num) => num + 10)
console.log(newNums);

const newNum2 = [];
numbers.forEach((num) => {
  newNum2.push(num + 10)
})
console.log(newNum2);

// ++++++++++++++ chaning ++++++++++++++++++

const chaningNums = numbers.map((num) => num * 100).map((num) => num + 1).filter((num) => num > 500)
console.log(chaningNums);

const initialValue = 0;
// reduce method 
// at first time it take initial value  after 1st iteration it calculate by accumulator + initial value 

const myNums = [1, 2, 3, 4]

const myTotal = myNums.reduce((accumulator, currentValue) => {
  console.log(`ACC: ${accumulator} and currentVal ${currentValue}`);

  return (accumulator + currentValue)
}, initialValue)
console.log(myTotal);

const mySum = myNums.reduce((acc, initial) => acc + initial, 0)
console.log(mySum);

const shoppingCart = [
  {
    itemName: "js Course",
    price: 1000
  },
  {
    itemName: "python Course",
    price: 2000
  },
  {
    itemName: "java Course",
    price: 5000
  }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
