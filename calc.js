let operand1 = process.argv[2]
let operator = process.argv[3]
let operand2 = process.argv[4]

if (operator === '+') {
    console.log(Number(operand1) + Number(operand2))
} else if (operator === 'm') {
    console.log(operand1 * operand2)
} else if (operator === '-') {
    console.log(operand1 - operand2)
} else if (operator === 'd' && operand2 === '0') {
    console.log('cannot divide by zero')
} else if (operator === 'd') {
    console.log(operand1 / operand2)
}
