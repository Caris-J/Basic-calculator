
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += ' ' + operator + ' ';
}
function resetCalculator() {
    document.getElementById('display').value = '';

}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}