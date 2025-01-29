$("#submit-btn").click(function(){
    let value1 = parseInt(document.getElementById("value1").value)
    let value2 = parseInt(document.getElementById("value2").value)
    let operator = document.getElementById("operator").value

    if ((operator == "/" | operator == "%") & value2 == 0){
        alert("It’s over 9000!")
        console.log("It’s over 9000!")
    }

    if (value1 >= 0 & value2 >= 0){
        let result = eval(`${value1}${operator}${value2}`)
        alert("O resultado é: " + result)
        console.log(result)
    } else {
        alert("Error :(")
    }
})

setInterval(function callMe(){
    alert("Please, use me...")
}, 30 * 1000)