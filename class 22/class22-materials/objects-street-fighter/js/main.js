//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

const Streetfighter = function(size,strength,color,male){
    this.size = size
    this.strength = strength
    this.color = color
    this.male = male

    this.attack = function() {
        console.log("ATTTAAK")
    }
    this.defend = function(){
        console.log("defend!")
    }
    this.specialMove = function(){
        console.log("SPECIALMOVE!!!")
    }


}
const st1 = new Streetfighter(200, 9000, 'black', true);