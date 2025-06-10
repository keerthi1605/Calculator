const display = document.getElementById("display");

// Button click functions
function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function backSpace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Allow numbers (0-9)
  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
    return;
  }
  
  // Allow operators (+, -, *, /)
  if (/[\+\-\*\/]/.test(key)) {
    appendToDisplay(key);
    return;
  }
  
  // Decimal point
  if (key === '.') {
    appendToDisplay('.');
    return;
  }
  
  // Enter or = for calculation
  if (key === 'Enter' || key === '=') {
    calculate();
    return;
  }
  
  // Backspace for deletion
  if (key === 'Backspace') {
    backSpace();
    return;
  }
  
  // Escape for clear
  if (key === 'Escape') {
    clearDisplay();
    return;
  }
});
