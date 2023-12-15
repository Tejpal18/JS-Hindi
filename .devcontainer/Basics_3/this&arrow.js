const user={
    username:"tejpal",
    price:999,

    welcome:function(){
        console.log(`${this.username}, welcome to CrickyPoint`);
        console.log(this)
    }

}


user.welcome()
user.name="Sam"
user.welcome()

console.log(this)

function cric(){
    let username="tanu"
    console.log(username)
}

cric()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//const addTwo=(num1,num2)=>num1+num2



const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4))

