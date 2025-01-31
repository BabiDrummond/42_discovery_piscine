const myButton = document.getElementById("bttn")
myButton.addEventListener("click", changeBgColor)

function changeBgColor(){
    document.getElementById("bg").style.backgroundColor = "rgb(" + Math.floor(Math.random() * 254) + "," + Math.floor(Math.random() * 254) + "," + Math.floor(Math.random() * 254) + ")"
}