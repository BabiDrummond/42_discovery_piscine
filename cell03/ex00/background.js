const myButton = document.getElementById("btn-clk")
let bodyEl = document.getElementById("bd-bg")

myButton.addEventListener("click", changeBgColor)

function changeBgColor(){
    let red = Math.floor(Math.random() * 254)
    let green = Math.floor(Math.random() * 254)
    let blue = Math.floor(Math.random() * 254)

    bodyEl.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}