const display = document.getElementById('display');

function appendtoDisplay(value) {
    console.log(value)
    display.value += value;
}

function calculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
    display.value = '';
}
