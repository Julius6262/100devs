//Create an espresso machine class that makes machines with 4 properties and 3 methods

class Machine {
    constructor(coffe, chocolate, latte, espresso){
        this.coffe = coffe
        this.chocolate = chocolate
        this.latte = latte
        this.espresso = espresso
    }

    makeCoffe(){
        console.log('make coffe')
    }
    clean(){
        console.log('clean the machine')
    }
    onOff(){
        console.log('turn the machine on/off')
    }
}

const esMachine = new Machine('df','sa','gf','ds')

esMachine.makeCoffe()
esMachine.clean()
esMachine.onOff()
console.log(esMachine.latte)