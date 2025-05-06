import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers.');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operator';
    }
    setResult(res);
  };

  const inputStyle = {
    width: '80px',
    fontSize: '1rem',
    padding: '5px',
    margin: '0 10px',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    fontFamily: 'Arial, sans-serif',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2>Basic Calculator</h2>
      <div style={rowStyle}>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First"
          style={inputStyle}
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          style={{ fontSize: '1.2rem' }}
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second"
          style={inputStyle}
        />
      </div>
      <button onClick={calculate} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Calculate
      </button>
      {result !== null && (
        <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default Calculator;
