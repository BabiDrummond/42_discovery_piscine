const display = document.getElementById('display')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')

equals.addEventListener('click', calculate)
clear.addEventListener('click', clearDisplay)

function appendToCalculus(value){
    display.value += value
}

function clearDisplay(){
    display.value = ''
}

function calculate(){
    try {
        const result = eval(display.value)
        if(isNaN(result)){
            alert('Error :(')
            console.log('Error :(')
            display.value = ''
        } else {
            display.value = result
            console.log('Result: ' + result)
        }
    } catch(error){
        alert('Error :(')
        console.log('Error :(')
        display.value = ''
    }
}

setInterval(function callMe(){
    alert("Please, use me...")
}, 30 * 1000)