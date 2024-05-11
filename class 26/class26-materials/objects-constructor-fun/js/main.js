//Create a constructor with 4 properties and 3 methods

function Pizza(cheese, shape, meat, burnt){
    this.chesse = cheese
    this.shape = shape
    this.meat = meat
    this.burnt = burnt

    this.tasty = function(){
        console.log(`very tasy a lot of ${this.meat}`)
    }
    this.vegan = function(){
        console.log("GTFO")
    }
    this.deliver = function(){
        console.log("yes")
    }
}

const p = new Pizza(true, "round", "peperonie, shrimp",false)

console.log(p)