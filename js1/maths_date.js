const num1=100;
console.log(num1)

const balance = new Number(10340)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(4)) // toFixed( ) gives decimal values after point //100.0000

const num2= 244.435435655346
console.log(num2.toPrecision(5))  // 244.44 
console.log(num2.toPrecision(2)) // 2.4e+2  

const num3 = 100000;
console.log(num3.toLocaleString())  // 100,000 for US format 
console.log(num3.toLocaleString('en-IN')) // 1,00,000  for indian format

// *******************MATHS*******************************

console.log(Math)  // capital M 

    
console.log(Math.abs(-4))  // converts to positive value like modulus 

console.log(Math.round(4.7)) //5 

console.log(Math.ceil(4.2)) //5  // choose higher value
console.log(Math.floor(4.7))// 4 // choose lower value

console.log(Math.min(45,55,54,5)) // 5 
console.log(Math.max(45,55,54,5)) // 55
//  max() function too 

console.log(Math.random()) // gives random number between 0 and 1


  // the values will be between 10 to 20 
const a = 10
const b = 20
console.log(Math.round(Math.random()*(Math.max(a)-Math.min(b)+1)+Math.min(b)))  // math.floor can also be used instead of math.round
// or 
console.log(Math.round(Math.random()*(b-a+1)+a))


// *******************date and time*******************************

// date
const date =new Date()
console.log(date.toString())  // Sun May 24 2026 14:30:28 GMT+0000 (Coordinated Universal Time) // date and time 

// create date :-
const newDate = new Date("5-24-2026")  // months -- 0 to 11  
console.log(newDate.toDateString()) // Tue Jan 21 2020

//date and time 
const newDate1 = new Date(2020, 0 , 21, 10, 30, 45, 22) 
console.log(newDate1.toString()) // locale not local // 1/21/2020, 10:30:45 AM

// get 
console.log(newDate1.getMonth()) //getDate(), getDay(), getFullYear(), getHours(), getMinutes(), getSeconds() etc.


let time = Date.now()

console.log(time)
console.log(newDate.getTime())

// to customize the date and time format we can use toLocaleString() method

const customize = newDate1.toLocaleDateString('default', {
  weekday: "long",
  year: "numeric",
  month: "short",
  hour: "numeric",
  minute: "numeric", 
  second: "numeric",
 
}
)
console.log(customize) 

/*
local = numeric, normal = alphabetic
.toString()            → alphabetic date + time
.toLocaleString()      → numeric date + time

.toDateString()        → alphabetic date
.toLocaleDateString()  → numeric date

.toTimeString()        → alphabetic time
.toLocaleTimeString()  → numeric time
/*




// node js1/maths_date.js


/* node js1/maths_date.js
    git add .
    git commit -m "basics1"
    git push origin main */