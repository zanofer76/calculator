function convert1(){
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let add = document.getElementById("result").innerHTML = "The result is " + (number1 + number2)
    return add
}

function convert2(){
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let subtract = document.getElementById("result").innerHTML = "The result is " + (number1 - number2)
    return subtract
}

function convert3(){
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let subtract = document.getElementById("result").innerHTML = "The result is " + (number1 * number2)
    return subtract
}

function convert4(){
    let number1 = Number(document.getElementById("num1").value)
    let number2 = Number(document.getElementById("num2").value)
    let divide = document.getElementById("result").innerHTML = "The result is " + (number1 / number2)
    return divide
}


