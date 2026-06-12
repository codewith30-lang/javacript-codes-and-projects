const arr = [1,2,3,4,5,6,7];
console.log(arr.indexOf(2));

const arr1 = new Array(1,2,3,4,5)

console.log(Array[2])


//array methods
arr.push(5) // [1, 2, 3, 4, 5, 6, 7, 5]
arr.pop() // [1, 2, 3, 4, 5, 6, 7]

arr.unshift(9)  // push at starting  // use shift for removing
arr.shift() // removes the first element
console.log(arr)

console.log(arr.includes(2)) // true or false

const newArr = arr.join()
console.log(arr, typeof newArr); // in newArr the type is changed!

// slice and splice
console.log("original Array:"," ", arr)

console.log("slice (0,3):"," ", arr.slice(1,3))   // end index is not included
console.log(arr) // the original array is not modified

console.log("splice (0,2):"," ", arr.splice(1,2)) // it changes the original array  // end index is included
console.log(arr) // the original array is now modified/updated
  /* key point
    agr apn index 0 se start krenge to dono ka same he aaega output but
    agar apn index 1 se start krenge to slice me 1 included hoga but splice me 1 included nhi hoga */
    

  const ar = ['mango', 'banana', 'apple', 'orange'];
  const ar1 = ['grapes', 'kiwi', 'papaya'];
  console.log(ar.concat(ar1)) 

  // new version of concat is spread 

  console.log([...ar, ...ar1])  // many arrays can be used

  const another_array = [1,2,3,[4,5],6,[7,[8,9]]]
  console.log(another_array.flat(Infinity)) // It will remove all nested arrays to the maximum level
                                            // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.from("kanak"))   // [ 'k', 'a', 'n', 'a', 'k' ]         



// array from and array of -- answer -- [100, 200, 300]
const score1 = 100;
const score2 = 200;   
const score3 = 300;
console.log(Array.from([score1,score2,score3])); // array with values 
 // or
console.log(Array.of(score1,score2,score3)); // array with values but it is not a method of array it is a method of object

// node js1/array.js

/* 
node js1/array.js
git add .
git commit -m "basics -- 1. const, let and var, 2.type conversion, 3.operators, 4.data types, 5.stack memory and heap memory"
git push origin main 
*/