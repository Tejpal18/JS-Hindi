const myArr=[0,1,2,3,4,5]
const myHeroes=["Virat Kohli","MS Dhoni"]

const myArr2=new Array(1,2,3,4)
console.log(myArr2)
console.log(myArr)
console.log(myHeroes)

//ArrayMethods

myArr.push(7)
console.log(myArr)
myArr.pop(7)
console.log(myArr)

// const na=myArr.unshift(9)
// console.log(na)
// myArr.shift()

const newArr=myArr.join()
console.log(myArr)
console.log(newArr)

//slice,splice

console.log("A",myArr);
console.log(myArr.slice(1,3))

const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
