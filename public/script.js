const but = document.querySelector("#but")
const cont = document.querySelector(".container")

let clik = true
but.addEventListener("click",()=>{
    
    if(clik){
cont.style.visibility = "visible"
but.style.transform = "rotate(90deg)"
clik = !clik

    }
    
    else{
cont.style.visibility = "hidden"
but.style.transform = "rotate(0deg)"
clik = !clik
    }
    
})