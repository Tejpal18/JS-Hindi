// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(["full name"])
console.log(JsUser[mySym])

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUSer)

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS User")
}

JsUser.greeting1=function(){
    console.log(`Hello JS User,${this.name}`)
}

console.log(JsUser.greeting()) 
console.log(JsUser.greeting1()) 
