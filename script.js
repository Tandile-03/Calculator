class Calculator{
    constructor(previousOperandTextElem, currentOperandTextElem)
    {
        this.previousOperandTextElem = previousOperandTextElem
        this.currentOperandTextElem = currentOperandTextElem
        this.clear()
    }
    clear()
    {
        this.currentOperand= ''
        this.previousOperand=''
        this.operation = undefined
    }
    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number)
    {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation)
    {
        //this.operation = operation
        if (this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand =''

    }
    compute()
    {
        let computation
        const previous = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(previous) || isNaN(current)) return

        switch(this.operation){
            case '+':
                computation = previous + current
                break
            case '-':
                computation = previous - current
                break
            case '*':
                computation = previous * current
                break
            case '÷':
                computation = previous / current
                break
            case '%':
                computation = (current)/100
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){
        const stringNumb = number.toString()
        const intNumbers = parseFloat(stringNumb.split('.')[0]) //turns number into array
        const decimalNumbers = stringNumb.split('.')[1]         //numbers after the decimal place

        let intDisplay 
        if(isNaN(intNumbers)){
            intDisplay =''
        }
        else{
            intDisplay = intNumbers.toLocaleString('en',{
            maximumFractionDigits:0    })
        }

        if(decimalNumbers !=null){
            return `${intDisplay}.${decimalNumbers}`
        }else{
            return intDisplay
        }

    }
    updateDisplay()
    {
        this.currentOperandTextElem.innerText = this.currentOperand
        
        // this.currentOperandTextElem.innerText = 
        //     this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElem.innerText = 
            `${this.previousOperand} ${this.operation}`
         }
        // else{
        //     this.previousOperandTextElem.innerText = ''
        // }
       
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElem = document.querySelector('[data-previous-operand]')
const currentOperandTextElem = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElem, currentOperandTextElem)

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()

    })
})

equalsButton.addEventListener('click',button=> {
        calculator.compute(button.innerText)
        calculator.updateDisplay()
})

allClearButton.addEventListener('click', button=> {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button=> {
    calculator.delete()
    calculator.updateDisplay()
})
