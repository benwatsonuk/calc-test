import Big from 'big.js'

export default function operators(numberOne, numberTwo, operation) {
    operation = operation || false
    switch (operation) {
        case 'plus':
            return new Big(numberOne).plus(numberTwo).toString()
            break;
        case 'minus':
            return new Big(numberOne).minus(numberTwo).toString()
            break;
        case 'divide':
            return new Big(numberOne).div(numberTwo).toString()
            break;
        case 'multiply':
            return new Big(numberOne).times(numberTwo).toString()
            break;
        default :
            throw 'No operator passed to function'
    }
}