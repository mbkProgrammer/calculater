let x = 0;
let y = 0;
let operator = ""
let dot = false;

const pressNumber = (number) => {
    if (operator) {
        if (dot) {
            y = Number(`${y}${number}`)
        } else {
            y = y * 10 + number
        }
        updateScreen(y)
    } else {
        if (dot) {
            x = Number(`${x}${number}`)
        } else {
            x = x * 10 + number
        }

        updateScreen(x)
    }
};

const updateScreen = (number) => {
    document.getElementById("screen").innerHTML = number
}

const pressOperator = (newoperator) => {
    operator = newoperator
    handleClearOperator()
    document.getElementById(newoperator).classList.add("active")
}

const pressDot = () => {
    dot = true
    if (operator) {
        y = `${y}.`
        updateScreen(y)
    } else {
        x = `${x}.`
        updateScreen(x)
    }
}

const handleClearOperator = () => {
    document.querySelectorAll(".operator").forEach((node) => {
        node.classList.remove("active")
    })
}
const handleClear = () => {
    y = 0
    x = 0
    operator = null
    updateScreen(x)
    handleClearOperator()
}

const pressEqual = () => {
    let result
    switch (operator) {
        case "multiple":
            result = x * y
            break;
        case "devide":
            result = x / y
            break;
        case "minus":
            result = x - y
            break;
        case "plus":
            result = x + y
            break;

        default:
            break;
    }
    result = parseFloat(result.toPrecision(12))
    y = 0
    x = result
    updateScreen(x)
    handleClearOperator()
    operator = null
}