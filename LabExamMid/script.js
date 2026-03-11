function appendNumber(num) {
    const display = document.getElementById('display');
   
    if (display.innerHTML === '0') {
        display.innerHTML = num;
    } else {
        display.innerHTML += num;
    }
}


function appendOperator(op) {
    const display = document.getElementById('display');
    const lastChar = display.innerHTML.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
       
        display.innerHTML = display.innerHTML.slice(0, -1) + op;
    } else {
        display.innerHTML += op;
    }
}


function calculate() {
    const display = document.getElementById('display');
    let expression = display.innerHTML;
    
    
    if (!expression || expression === '0') return;
    
    try {
        
        const result = eval(expression);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}


function clearDisplay() {
    document.getElementById('display').innerHTML = '0';
}