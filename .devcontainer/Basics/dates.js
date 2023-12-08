// Dates

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate1=new Date(2023,0,23,5,23)
let myCreatedDate2=new Date("2023-01-14")
console.log(myCreatedDate)
console.log(myCreatedDate1)
console.log(myCreatedDate2) 

let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay()) 

newDate.toLocaleString('default', {
    weekday: "long",
    
})
