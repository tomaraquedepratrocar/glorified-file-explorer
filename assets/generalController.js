
//creates a button that creates a button
let criadorDeStart = (base,title) =>{
    let bigHolder = document.createElement('div')
    bigHolder.className="organizing"
    let holder = document.createElement('div')
    holder.className = "testConcept"
    let holderTitle = document.createElement('p')
    holderTitle.innerHTML = title
    holder.appendChild(holderTitle)
    let inputter = document.createElement('input')
    let summer = document.createElement('button')
    summer.innerHTML = "+"
    summer.addEventListener("click",() => {
        criadorDeStart(bigHolder,inputter.value)
        inputter.value= ""
        })
    holder.appendChild(inputter)
    holder.appendChild(summer)
    bigHolder.appendChild(holder)
    base.appendChild(bigHolder)
}

let base = document.getElementById("root")
let templateStart = criadorDeStart(base,"create your first node")
