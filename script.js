class Calculator{
    constructor(previousOperandTextElem, currentOperandTextElem)
    {
        this.previousOperandTextElem = previousOperandTextElem
        this.currentOperandTextElem = currentOperandTextElem
    }
    clear()
    {
        this.currentOperand= ''
        this.previousOperand=''
        this.operation = undefined
    }
    delete()
    {

    }
    appendNumber(number)
    {
        if (number === '.' && this.currentOperand.include ('.'))
        return this.currentOperand = this.currentOperand.toString() + number.toString

        if(number ==='%' && this.currentOperand.include ('%')) 
        return this.currentOperand = this.currentOperand.toString() + number.toString
    }
    chooseOperation(operation)
    {

    }
    compute()
    {}
    updateDisplay()
    {
        this.currentOperandTextElem.innerText = this.currentOperand
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