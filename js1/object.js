// objects in javascript
 const mysymbol = Symbol("key1")  // symbol , in symbol value always comes as undefined
                                         //  soo in object we have to write symbol in square brackets 

 // declaring  object
const student= {
name:"kanak",
email:"themuiya@gmail.com",
login_days: ["monday", "tuesday", "friday"],
age: 22,
"full name" : "kanak agrawal",
[mysymbol]: "value" // write symbol in square bracket to be accessed otherwise 'undefined' will come as output
};

console.log(student.name)
console.log("email:", student["email"], " and fullname:", student["full name"]) // for keys with space we have to use bracket notation
console.log(student[mysymbol]) // accessing symbol property

student.age=23
console.log("age" ,student.age) // 23  // age changed

//Object.freeze(student)                  // edhr object ka he name aaega 
student.email = "kanak@yahoo.com";
console.log(student.email) // email is not changed because it is frozen


student.gretting = function(){
    console.log(`hello! how are you ${this.name}`); 
}
console.log(student.gretting());
// node js1/object.js

/* 
node js1/object.js
git add .
git commit -m "basic object"
git push origin main 


*/