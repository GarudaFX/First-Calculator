const answerDisplay = document.getElementById("display");
const computeDisplay = document.getElementById("compute");
const buttons = document.querySelectorAll(".op-btn");
const equals = document.getElementById("displayTotal");
const clear = document.getElementById("clear");

const buttonDisplay = {
    "1" : 1,
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "0" : 0,
    "%" : "%",
    "/" : "÷",
    "." : ".",
    "+" : "+",
    "x" : "x",
    "-" : "-",
    "clear" : 0
}

buttons.forEach(button => {
    button.onclick = () => {
        computeDisplay.innerText = `${buttonDisplay[button.value]}`
        console.log(Number(buttonDisplay[button.value]));
    }
})


const answer = 12

const computation = (answer) => {
  buttons.forEach(button => {

    const myArrays = []
    for(let i = 0; i < myArrays.length; i++) {
        for(j = i + 1; j < myArrays.length; j++) {

        }
    }
  })
}

equals.onclick = () => {
    answerDisplay.innerText = answer
}

const resetValue = () => {
    computeDisplay.innerText = "0"
    answerDisplay.innerText = "0"
}

clear.onclick = () => {
    resetValue()
}






