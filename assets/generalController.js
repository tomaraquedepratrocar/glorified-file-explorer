let id_variable=1;
let base = document.getElementById("root")
let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

    if(base.id!="root"){
        drawLine(holder,base)
    }

    summer.addEventListener("click",() => {
        criadorDeStart(bigHolder,inputter.value,holder)
        inputter.value= ""
        })
}


let drawLine = (node,father) =>{
    let ctx = canvas.getContext("2d")
    ctx.beginPath()
    let pos = node.getBoundingClientRect()
    let posDad = father.getBoundingClientRect()
    ctx.moveTo(posDad.x,posDad.y)
    ctx.lineTo(pos.x+(pos.width/2),pos.y+(pos.height/2))
    console.log(posDad)
    ctx.stroke()
}
//for now i should concider either remaking the entire canvas every time a new line gets made or staking canvas
//probably remaking the canvas, giving ids to every node should help



let templateStart = criadorDeStart(base,"create your first node",)

