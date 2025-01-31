const display = document.getElementById('display')

function appendToCalculus(value){
    display.value += value
}

$("#clear").click(function (){
    display.value = ''
}
)

$("#equals").click(function (){
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
)

setInterval(function callMe(){
    alert("Please, use me...")
}, 30 * 1000)