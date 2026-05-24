
//1) *****const, let and var in js*****

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



// 2) *****type correction in js*****
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


// 3) *****operators in js*******
let VALUE = 10
let nega_value = -VALUE
console.log(nega_value) //-10

// arithmetic operators
console.log(5*3,"," ,10/2) // 15 5
console.log(10%3) //1 (modulus gives remainder)
console.log(2**3) //8 (2 to the power of 3)

// string concatenation
let str1= "kanak"
let str2 = "agrawal"
let full_name = str1 + str2   // str1 + "" + str2 -- kanak agrawal 
console.log(full_name) // kanakagrawal

//post increment
let g= 23
g++   // let h= g++
console.log(g)

// 4) *****data types in js*****

// 1. string 2. number 3. boolean 4. null 5. undefined 6. symbol(unique and immutable) 7. bigint (for large integers) 
let name = "kanak"  
let age = 22        
console.log(typeof name, typeof age)  //string number 

console.log(typeof null)  //object (this is a known bug in js)
console.log(typeof undefined)  //undefined

//higher level: (no need to understand now)
console.log(typeof Symbol("id"))  //symbol
console.log(typeof BigInt(12345678901234567890))  //bigint

// symbol 
let sy = Symbol("123")
let sy1 = Symbol("123") // even if the description is same, they are unique
console.log(sy===sy1)  // false

// non-primitive data types in js
   // 1. object 2. array 3. function

let student = ["kanak", "anisha", "lakshya"] // array 

let obj1 = {    // object
   name : "knak",
   age :13
}

// 5)***stack and heap memory in js***
    // stack( stores primitive data type), heap (stores non-primitive data type)

 //stored in stack memory:- 
let a = 10   // primitive data type stored in stack memory`
let b = a    // b gets a copy of the value of a
b=20   
console.log(a, b)  // changes b to 20, a remains 10


// stored in heap memory
let obj0 = 
{ name : "kanak",
   age : 12,}

let obj2 = {
   name: "laira", 
   age:13 }

obj2= obj0 // obj2 now references the same object as obj1
obj2.name = "anisha" 

console.log(obj0,obj2)  // { name: 'anisha', age: 12 } { name: 'anisha', age: 12 }
// both are same because they reference the same object in heap memory


/* 
node js1/basics.js
git add .
git commit -m "basics -- 1. const, let and var, 2.type conversion, 3.operators, 4.data types, 5.stack memory and heap memory"
git push origin main 
*/