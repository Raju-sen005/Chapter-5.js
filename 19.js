// LOOPS WITH ARRAYS
let r = [5,6,7,8,9,9]
// for(let i=0;i<r.length;i++){//[classical for loop]
// 	console.log(r[i])
// }
// FOREACH LOOP
// r.forEach(element => {
	// console.log(element+element)
// });

// Array.from
// let a = "Raju"
// let b = Array.from(a)//[kisi bhi string ko array m convert krne ke liye]
// console.log(b)

// For...of
// for(let i of r){
// 	console.log(i)//[ye for loop jaisa hi h pr sort h]
// }

// For...in
// for(let i in r){
// 	console.log(i)//[ye apake array ki length ke according hoga]
// }

// For...in
for(let i in r){
	console.log(r[i])//[ye apake array ko print krega]
}