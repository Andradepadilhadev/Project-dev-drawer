

const button = document.querySelector(".button-main")
const resultPrint = document.querySelector(".resultado-sorteio")

function draw() {

    const min = Math.ceil(document.querySelector("#input-main-1").value)
    const max = Math.floor(document.querySelector("#input-main-2").value)

    const result = Math.floor(Math.random() * (max - min) + min);
    
    resultPrint.innerHTML = result
   
}



button.addEventListener("click", draw)



