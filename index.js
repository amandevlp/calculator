function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}
function evaluateExpression() {
    const screenValue = document.getElementById('screen').value;
 
    
    
    try {
      const result = eval(screenValue);
      document.getElementById('screen').value = result;
    } catch (error) {
      document.getElementById('screen').value = 'Error';
    }
  }

