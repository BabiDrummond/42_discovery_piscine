const colors = ["red", "green", "blue"]
const maxSize = 420
const minSize = 200
const balloon = document.getElementById("balloon")
const initialSize = parseInt(balloon.style.width) || balloon.clientWidth
let balloonSize = parseInt(balloon.style.width) || balloon.clientWidth
let colorIndex = 0

balloon.addEventListener("click", explodeBalloon)
balloon.addEventListener("mouseover", hoverBalloon)

function explodeBalloon(){
    balloonSize += 10

    if (balloonSize > maxSize) {
        alert("The balloon popped!")
        balloonSize = initialSize   
    }

    balloon.style.width = balloonSize + "px"
    balloon.style.height = balloonSize + "px"

    colorIndex += 1

    if (colorIndex > 2) {
        colorIndex = 0
    }

    balloon.style.backgroundColor = colors[colorIndex]
}

function hoverBalloon(){
    if (balloonSize > minSize) {
        balloonSize -= 5

        balloon.style.width = balloonSize + "px"
        balloon.style.height = balloonSize + "px"

        colorIndex -= 1

        if (colorIndex < 0) {
            colorIndex = 2
        }

        balloon.style.backgroundColor = colors[colorIndex]
    }
}