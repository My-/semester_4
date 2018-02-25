
let arr:string[] = ['Task one']

const task = (task:string):number => {
    arr.push(task)
    console.log(`Added "${task}" to array.`)
    return arr.length
}

const listAllTasks = () => arr.forEach(it => console.log(it))

const deleteTask = (s:string) =>{
    // arr.slice()
    let tArr = arr.filter(it => it !== s)
    arr = tArr
    console.log(`
        Deleted "${s}" from array.
        Array now: ${arr}`)

}

console.log(`Array: ${arr}`)
task('Run Fast')
task('Run Even Faster')
task('Go home')

console.log(`Tasks at the moment are:`)
listAllTasks()

deleteTask('Run Fast')
listAllTasks()
