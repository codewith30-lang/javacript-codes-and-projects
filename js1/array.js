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
    
// node js1/array.js
