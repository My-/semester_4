


export class Person{
    private DOB:Date
    protected readonly name:string

    constructor(DOB:Date, name:string){
        this.DOB = DOB
        this.name = name
    }

    /**
    *   Returns person age.
    */
    getAge():number{
        const now = new Date()
        const notYet = now.getMonth() < this.DOB.getMonth() // mounth precision
        return now.getFullYear() - this.DOB.getFullYear() -(notYet ? 1 : 0)
    }

    //public toString = ():string => `${this.name} is ${this.getAge()} yers old.`
    toString():string{
        return `${this.name} is ${this.getAge()} yers old`
    }
}// Person
