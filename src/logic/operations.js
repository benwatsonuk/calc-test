import Big from 'big.js'

export default function operators(numberOne, numberTwo, operation) {
    operation = operation || false;
    if (operation === 'plus') {
        return new Big(numberOne).plus(numberTwo).toString();
    } else if (operation === 'minus') {
        return new Big(numberOne).minus(numberTwo).toString();
    } else if (operation === 'divide') {
        return new Big(numberOne).div(numberTwo).toString();
    } else if (operation === 'multiply') {
        return new Big(numberOne).times(numberTwo).toString();
    }
}