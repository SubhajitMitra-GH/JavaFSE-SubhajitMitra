import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const sayHello = () => {
    alert('Hello! Have a great session in React Event Handling.');
  };

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(`Message received: ${msg}`);
  };

  const handlePress = (e) => {
    alert('Synthetic Event Triggered: I was clicked!');
  };

  return (
    <div style={{ padding: '25px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>React Event Handling Portal</h1>

      <div style={{ padding: '15px', border: '1px solid #17a2b8', borderRadius: '8px', margin: '15px 0' }}>
        <h3>Counter: {counter}</h3>
        <button onClick={handleIncrement} style={{ marginRight: '10px', padding: '8px 12px' }}>
          Increment
        </button>
        <button onClick={handleDecrement} style={{ padding: '8px 12px' }}>
          Decrement
        </button>
      </div>

      <div style={{ padding: '15px', border: '1px solid #ffc107', borderRadius: '8px', margin: '15px 0' }}>
        <h3>Parametrized Event Handler</h3>
        <button onClick={() => sayWelcome('welcome')} style={{ padding: '8px 12px' }}>
          Say Welcome
        </button>
      </div>

      <div style={{ padding: '15px', border: '1px solid #dc3545', borderRadius: '8px', margin: '15px 0' }}>
        <h3>Synthetic Event (OnPress / OnClick)</h3>
        <button onClick={handlePress} style={{ padding: '8px 12px' }}>
          Click Me (OnPress)
        </button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
