
// const, let and var in js:-
const studentID = 10     // it can't be changed , bec it is a constant
let account_email = "kanak@gmail.com"
var student_name = "kanu"  /* 'var' is not used now , use 'let' only!
                            issue in functional scope and block scope  */

studentCity = "jabalpur"   // prefered not to use without any variable or constant , but still runs...
console.table([account_email,student_name, studentCity, studentID])


console.log("corrected table:")

account_email = "kanak123@gmail.com"
student_name = "kanak"
studentCity = "indore"

console.table([account_email,student_name, studentCity, studentID])

// data types in js
// 1. string 2. number 3. boolean 4. null 5. undefined 6. symbol(unique and immutable) 7. bigint (for large integers) 
let name = "kanak"  
let age = 22        
console.log(typeof name, typeof age)  //string number 

console.log(typeof null)  //object (this is a known bug in js)
console.log(typeof undefined)  //undefined

//higher level: (no need to understand now)
console.log(typeof Symbol("id"))  //symbol
console.log(typeof BigInt(12345678901234567890))  //bigint


//type correction in js:-
console.log("type correction in js:")
let score = "100" //string 
let value = Number(score)  // converts string to number
console.log( typeof value) // number



let scores = "33abc"  // string containing numbers & letters
let values = Number(scores)  // conversion fails, result = NaN

console.log(values) // NaN (Not a Number)
console.log(typeof values)   // number (NaN is considered a number type in JavaScript)

/* strings with only numeric characters convert into numbers ✔
   non-numeric characters cause conversion to return NaN */


// advance type conversion in js: