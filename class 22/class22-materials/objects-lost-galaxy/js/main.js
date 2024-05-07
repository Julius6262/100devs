//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.color = "black"
mouse.size = 30
mouse.price = 199

mouse.leftClick = function(){
    console.log("you clicked the left")
}

mouse.rightClick = function(){
    console.log("you clicked the right")
}

mouse.move = function(){
    console.log("moved")
}