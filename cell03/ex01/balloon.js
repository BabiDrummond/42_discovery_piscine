const colors = ["red", "green", "blue"]
let balloon = document.getElementById("balloon")
let balloonWidth = parseInt(balloon.style.width) || balloon.clientWidth
let balloonHeight = parseInt(balloon.style.height) || balloon.clientHeight
let initialWidth = balloonWidth
let initialHeight = balloonHeight
let colorIndex = 0

balloon.addEventListener("click", explodeBalloon)
balloon.addEventListener("mouseover", hoverBalloon)

function explodeBalloon(){
    balloonWidth += 10
    balloonHeight += 10
    colorIndex += 1

    if (balloonWidth > 420) {
        balloonWidth = initialWidth
        balloonHeight = initialHeight   
    }
    
    balloon.style.width = balloonWidth + "px"
    balloon.style.height = balloonHeight + "px"

    if (colorIndex > 2) {
        colorIndex = 0
    }

    balloon.style.backgroundColor = colors[colorIndex]
}

function hoverBalloon(){
    if (balloonWidth >= 205) {
        balloonWidth -= 5
        balloonHeight -= 5
        colorIndex -= 1

        balloon.style.width = balloonWidth + "px"
        balloon.style.height = balloonHeight + "px"

        if (colorIndex < 0) {
            colorIndex = 2
        }

        balloon.style.backgroundColor = colors[colorIndex]
    }
}