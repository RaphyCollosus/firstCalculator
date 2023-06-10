const screenDisplay = document.querySelector(".screen")
const buttons = document.querySelectorAll("button")

let calculation = []
let accumulativeCalc

function calculate(button){

const value = button.textContent

calculation.push(value)

if (value == "CLEAR"){
  calculation = ["0"];
  screenDisplay.textContent = "0"
}

else if (value == "="){
  screenDisplay.textContent = eval(accumulativeCalc)
}

else{
  accumulativeCalc = calculation.join("")
  screenDisplay.textContent = accumulativeCalc;

}




}

buttons.forEach(button => button.addEventListener("click",() => calculate(button)))