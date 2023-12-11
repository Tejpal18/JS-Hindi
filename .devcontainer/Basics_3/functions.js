function sayMyName(){
    console.log("T");
    console.log("E");
    console.log("J");
    console.log("P");
    console.log("A");
    console.log("L");
}

sayMyName()

//    function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
//  }

function addTwoNumbers(num1,num2){
    return num1+num2
}

const result=addTwoNumbers(7,8)

console.log("Result : ",result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

   console.log(loginUserMessage("Tejpal"))
   

   function calculate(val1,val2,...num){
    return num1
   }

   console.log(calculate(200,400,800,400,600))

   const user={
    username:"tejpal",
    id:200280420
   }

   function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.price}`)
   }

   handleObject(user)

   handleobject({
    username:"sam",
    price:45
   })

   const myNewArray=[300,350,380]
   function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));