// Implementation of arithmetic parser algorithm in Hindi

// Function to evaluate the arithmetic expression
function evaluateExpression(expression) {
    // Remove whitespace from the expression
    expression = expression.replace(/\s/g, '');
  
    // Convert the Hindi words for operations to symbols
    expression = expression.replace(/जोड़/g, '+');
    expression = expression.replace(/गुणा/g, '*');
    expression = expression.replace(/भाग/g, '/');
    expression = expression.replace(/घटा/g, '-');
  
    try {
      // Evaluate the expression using eval() function
      const result = eval(expression);
      return result;
    } catch (error) {
      return 'Invalid expression';
    }
  }
  
  // Function to handle the button click event
  function parseExpression() {
    const inputExpression = document.getElementById('input-expression').value;
    const outputResult = document.getElementById('output-result');
  
    const result = evaluateExpression(inputExpression);
    outputResult.value = result;
  }
  
  // Attach event listener to the button
  const parseBtn = document.getElementById('parse-btn');
  parseBtn.addEventListener('click', parseExpression);
  