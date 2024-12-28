// CHAPTER-5 PARACTICE SET
// P-1
// let arr = [1,2,3,4,5,6]
// let a = prompt("Enter a number:")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)


// P-2
// let arr = [1,2,3,4,5,6]
// let a;
// do{
// 	a = prompt("Enter a number:")
// 	a = Number.parseInt(a)
// 	arr.push(a)
// }while(a!=9)
// 	console.log(arr)

//P-3
// let arr = [10,34 ,66,70,45,60]
// let n = arr.filter((x)=>{
// 	return x%11==0
// })
// console.log(n)


// //P-4
// let arr = [10,34 ,66,70,45,60]
// let n = arr.map((x)=>{
// 	return x*x
// })
// console.log(n)


//P-5
let arr = [1,3,6,7,4,6]
let n = arr.reduce((x1, x2)=>{
	return x1 * x2
})
console.log(n)