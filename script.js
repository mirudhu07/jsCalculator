 function calculate(operation) {
    const display = document.getElementById('display');
    display.value += operation;
  }

  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }

  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
