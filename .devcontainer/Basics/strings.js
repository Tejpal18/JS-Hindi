const name="Tejpal Singh"
const repoCount=50

console.log(`Hello I'm ${name} and Repo Count is ${repoCount}`)

const game=new String('tejpal-hc-com')

console.log(game[0]);
console.log(game.__proto__);

console.log(game.length)
console.log(game.toUpperCase());

console.log(game.charAt(2))
console.log(game.indexOf('t'))

const newString=game.substring(0,4)

console.log(newString)

const nvistring=game.slice(-8,4)

console.log(nvistring)

const spaceaalistring=" tejpal "
console.log(spaceaalistring.trim())

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(game.split('-'));

