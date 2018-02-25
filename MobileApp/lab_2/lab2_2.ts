
interface myColection{
    arr:string[]

    addTask(task:string):number
    listAllTAsks():void
    deleteTask(task:string):number
}

class myTest implements myColection{
    arr:string[] = []

    addTask = (task:string):number => this.arr.push(task)

    listAllTAsks = ():void =>
            console.log(`Tasks are: ${this.arr}. Total: ${this.arr.length}`)

    deleteTask(task:string):number{
        this.arr = this.arr.filter(it => it !== task)
        return this.arr.length
    }
}

const testas = new myTest()
const task1 = 'Task One'
const task2 = 'Task Two'
const task3 = 'Task Three'

console.log(`Adding "${task1}": ${testas.addTask(task1)}`)
console.log(`Adding "${task2}": ${testas.addTask(task2)}`)
console.log(`Adding "${task3}": ${testas.addTask(task3)}`)
testas.listAllTAsks()

console.log(`Deleting "${task2}": ${testas.deleteTask(task2)}`)
testas.listAllTAsks()
