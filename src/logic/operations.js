import Big from 'big.js'

export default function operators(numberOne, numberTwo, operation) {
    operation = operation || false;
    switch (operation) {
        case 'plus':
            return new Big(numberOne).plus(numberTwo).toString();
        case 'minus':
            return new Big(numberOne).minus(numberTwo).toString();
        case 'divide':
            return new Big(numberOne).div(numberTwo).toString();
        case 'multiply':
            return new Big(numberOne).times(numberTwo).toString();
        default :
            throw {error: 'No operator passed to function'}
    }
}