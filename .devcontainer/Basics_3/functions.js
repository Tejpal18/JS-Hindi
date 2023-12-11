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
   