
const name = "John";
const another = new String("Johans Deo lingo")
console.log(another[0])  // use charAt() gives specific index
console.log(another.__proto__)
console.log(another.slice(0,3))  // slice(start, end) 

const str1 = "  heuhf"
console.log(str1.trim())  // removes extra-spaces 

const url = "https://www.google.com/search?q=javascrpt%20methods"
console.log(url.replace("%20", "-")) // replaces-- "%20" with "-"

console.log(url.includes("search"))  
console.log(url.split("/")) // splits string into array based on the separator 
console.log(another.split(" "))  

/* 
 String prototype methods :-
String.prototype
charAt()
concat()
includes()
indexOf()
replace()
slice()
split()
substring()
toLowerCase()
toUpperCase()
trim()


// actual value stored
[[PrimitiveValue]]: "Johans"
*/


/* 
node js1/string.js
git add .
git commit -m "string"
git push origin main 

*/



















