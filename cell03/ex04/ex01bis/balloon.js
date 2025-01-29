const colors = ["red", "green", "blue"]
const maxSize = 420
const minSize = 200
const balloon = document.getElementById("balloon")
const initialSize = parseInt(balloon.style.width) || balloon.clientWidth
let colorIndex = 0


$("#balloon").click(function() {
    updateBalloon(10, false)
})

$("#balloon").mouseout(function (){
    updateBalloon(-5, true)
}
)

function updateBalloon(value, colorReverse){
    let balloonSize = parseInt(balloon.style.width) || balloon.clientWidth

    balloonSize += value

    if (balloonSize > maxSize){
        balloonSize = initialSize

        balloon.style.width = balloonSize + "px"
        balloon.style.height = balloonSize + "px"
    } else if (balloonSize > minSize) {
        balloon.style.width = balloonSize + "px"
        balloon.style.height = balloonSize + "px"
    }

    if (colorReverse){
        colorIndex -= 1

        if (colorIndex < 0) {
            colorIndex = 2
        }
    } else {
        colorIndex += 1

        if (colorIndex > 2) {
            colorIndex = 0
        }
    }

    balloon.style.backgroundColor = colors[colorIndex]
}