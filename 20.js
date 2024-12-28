// let arr =[45,33,89]
// Array map Method
//let a =
// arr.map((value,index,array)=>{//[ek new array banane m map ka use kiya jaya h]
// 	console.log(value,index,array)
// return value + index
// })
// console.log(a)

// Array filter Method
// let ab = [54, 5, 2, 9, 78, 11, 14];
// let b = ab.filter((a) => {
//   return a < 10;
// });//[iske jis function ki value true hogi vo hi print hoga]
// console.log(b);


// Array reduced Method
let a =[1,2,3,4,5,6]
let a1 = a.reduce((h1,h2)=>{
	return h1+h2//[ye function ke according array ki value ko + krta h or last m answer deta h]
})
console.log(a1)