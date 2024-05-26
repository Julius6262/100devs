//Create an a class and extend it - Can be anything you would like it to be! 

class Car{
    constructor(doors, gear){
        this.doors = doors
        this.gear = gear
    }

    drive(){
        console.log(`set in ${this.gear} and push speeder`)
    }

    turnRadioOn(){
        console.log('radio is on')
    }
}

class BMW extends Car{
    constructor(doors,gear,horsePower){
        super(doors,gear)
        this.horsePower = this.horsePower
    }
    honk(){
        console.log('BOOOOTTT')
    }
    radio(){
        super.turnRadioOn()
    }
}

const car = new Car(4,"manuel gear")
console.log(car)

const bmw = new BMW(6,"automatic gear",500)
console.log(bmw)
console.log(bmw.radio())