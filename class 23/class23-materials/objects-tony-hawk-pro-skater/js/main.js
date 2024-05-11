//Create a Tony Hawk Pro Skater constructor that makes 
//fighting game characters with 4 properties and 3 methods

function Skater(gender, color, skills, shoes){
    this.gender = gender
    this.color = color
    this.skills = skills
    this.shoes = shoes

    this.trick = function(){
        console.log("ollie")
    }
    this.speed = function(){
        console.log("very fast")
    }
    this.jump = function(){
        console.log("jumpping")
    }
}

const sk = new Skater('male', 'white', true, 'vans')

sk.trick()