// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//create a function
//create an empty array to store 10 fig Fibonacci sequence
//create a fibinachi formula to generate sequence
//return 10 pushed numbers into output array
// const Fibonacci = (array) =>
// var fib = [0, 1];
//
// for(var i=fib.length; i<=10; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
// }
// console.log(fib);

const Fibonacci = (num) => {
  if (num === 1)
  {
    return [0, 1]
  }
  else
  {
    let newArray = Fibonacci(num - 1)

    newArray.push(newArray[newArray.length - 1] +         newArray[newArray.length - 2])
    return newArray;
  }
}

 console.log(Fibonacci(10));


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function to return only odd sorted numbers
const oddSort = (array) => {

  //filter numbers from array
  let filterArray = array.filter(value => {

      typeof value === "number" && value % 2 !== 0
  })

  //filter odd numbers from new number array

  //return odd number array sorted low to high
   return filterArray.sort(function(a, b){return a - b})
 }
console.log(oddSort(fullArr1));
console.log(oddSort(fullArr2));


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//create function to map the length of the string
//if the string (%2) is even return (string.map/2)[mid-index='l']
//if the string (%2) is odd return ((string.map/2)+1)[mid-index='oc']

const getMiddle = (str) => {

  let strLength = str.length;

  if (strLength%2==0) {
    return (str.substring((strLength/2)-1,(strLength/2)+1))
  }

  else {
  	return (str.charAt(Math.floor(strLength/2)))
  }

}

console.log(getMiddle(middleLetters1));
console.log(getMiddle(middleLetters2));


// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []


//create function that addes given array
//map through array

// const arrAdd = (array) =>{
//     let newArray = []
//     for(let n=0; n<array.length; n++){
//       return newArray.push(array[n] + (array[n-1]))
// }
//
// }
console.log(arrAdd(numbersToAdd1))

  // const arrAdd = (array) =>{
  // let newValues = array.map((curr, i, array) => {
  // return array[i] += array[i-1] ? array[i-1] : 0
  // })
  // }
