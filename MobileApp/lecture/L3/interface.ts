

interface car{
    year: number
    seats: number
    make: string
    doors?: number
    displayInfo():void
}

class Ford implements car{
    year = 1980
    seats = 4
    make = "Ford"

    displayInfo(){ return `This is ${this.make}`}
}

const myFord = new Ford()
console.log(myFord.displayInfo())

// const ford1:Ford = {year: 1990, seats:3, make:"Siera", }
myFord.make = 'siera'
console.log(myFord.displayInfo())
