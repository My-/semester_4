const echo = data => data

console.log(echo('hello'))
console.log(echo('hello').length)
console.log(echo(22))
console.log(echo(22).length)

// const betterEcho<T> = (data:T) => data

function betterEcho<T>(data:T){
    return data
}

console.log(betterEcho('hello'))
console.log(betterEcho('hello').length)
console.log(betterEcho(22))
// aaconsole.log(betterEcho(22).length)
