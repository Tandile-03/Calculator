class Calculator{
    constructor(previousOperandTextElem, currentOperandTextElem)
    {
        this.previousOperandTextElem = previousOperandTextElem
        this.currentOperandTextElem = currentOperandTextElem
    }
    clear()
    {
        this.currentOperandTextElem= ''
        this.previousOperandTextElem=''
        this.operation = undefined
    }
    delete()
    {

    }
    appendNumber(number)
    {

    }
    chooseOperation(operation)
    {

    }
    compute()
    {}
    updateDisplay()
    {
        
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelector('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const callClreaButton = document.querySelector('[data-all-clear]')
const equalButtons = document.querySelector('[data-equals]')
const previousOperandTextElem = document.querySelector('[data-previous-operand]')
const currentOperandTextElem = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElem, currentOperandTextElem)

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})