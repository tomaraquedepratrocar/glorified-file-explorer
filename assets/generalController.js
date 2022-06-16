let id_variable=1;
let base = document.getElementById("root")
let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d")

let ArrayLines = []

//creates a button that creates a button
let criadorDeStart = (base,title) =>{
    let bigHolder = document.createElement('div')
    bigHolder.className="container"

    let holder = document.createElement('div')
    holder.className = "testConcept"

    holder.id = ("Node_"+id_variable.toString())
    id_variable = id_variable + 1;
    let holderTitle = document.createElement('p')
    holderTitle.innerHTML = title
    holder.appendChild(holderTitle)
    let inputter = document.createElement('textarea')
    inputter.addEventListener('keyup',()=>console.log('teste'))
    let summer = document.createElement('button')
    summer.innerHTML = "+"

    
    
    holder.appendChild(inputter)
    holder.appendChild(summer)
    bigHolder.appendChild(holder)
    base.appendChild(bigHolder)

    summer.addEventListener("click",() => {
        criadorDeStart(bigHolder,inputter.value)
        inputter.value= ""
        AddLineToArray(holder.id, ("Node_"+(id_variable-1).toString()),ArrayLines)
        })
}



let AddLineToArray = (firstNodeid, secondNodeid, array) => {
    array.push([firstNodeid, secondNodeid])
    redrawAllLines(array)

}


let redrawAllLines = (array) =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for(line of array){
        console.log(line)
        let element1 = document.getElementById(line[0])
        let element2 = document.getElementById(line[1])
        drawLine(element1,element2)
    }
}




let drawLine = (father,node) =>{
    ctx.beginPath()
    let posSon = node.getBoundingClientRect()
    let posDad = father.getBoundingClientRect()
    ctx.moveTo(posDad.x+(posDad.width/2),posDad.y+(posDad.height/2))
    ctx.lineTo(posDad.x+(posDad.width/2),posSon.y+(posSon.height/2))
    ctx.lineTo(posSon.x+(posSon.width/2),posSon.y+(posSon.height/2))
    console.log(posDad)
    ctx.stroke()
}
//for now i should concider either remaking the entire canvas every time a new line gets made or staking canvas
//probably remaking the canvas, giving ids to every node should help



let templateStart = criadorDeStart(base,"create your first node",)

