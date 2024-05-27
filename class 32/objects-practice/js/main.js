// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
/*class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}
*/

class Contractor{
    constructor(hours){
        this._hours = hours
        this._hourSalavry = 500
    }
    // abstraction
    get hours(){
        return this._hours
    }
    appBuild(){
        console.log("ourer team help you build your app")
    }
}

class Frontend extends Contractor{
    constructor(hours){
        super(hours)
    }

    fontAppbuild(){
        super.appBuild()
        console.log("im building the frontend part")
    }

    functionality(){
        console.log("buttons, nav, and more")
    }
}

class Backend extends Contractor{
    constructor(hours){
        super(hours)
    }
    backendAppBuild(){
        super.appBuild()
        console.log("im building the backend part")

    }
}

arr = [new Contractor(200), new Frontend(300), new Backend(320)]

for ( el of arr){
    console.log(el.appBuild())
}