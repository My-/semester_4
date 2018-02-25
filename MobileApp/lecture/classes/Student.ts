
import {Person} from './Person'

export {Person} from './Person'


export class Student extends Person{
    protected course:string

    constructor(DOB:Date, name:string, course:string){
        super(DOB, name)
        this.course = course
    }

    toString():string{
        return `${super.toString()} doing ${this.course} course`
    }
}
