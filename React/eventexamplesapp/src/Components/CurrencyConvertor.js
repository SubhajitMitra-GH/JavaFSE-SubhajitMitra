import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) * 0.011).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #28a745', borderRadius: '8px', margin: '20px 0' }}>
      <h3>Currency Convertor (INR to EUR)</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Amount in Rupees (₹):</label>
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            required
            style={{ padding: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Convert
        </button>
      </form>
      {euro !== null && !isNaN(euro) && (
        <h4 style={{ color: '#155724', marginTop: '10px' }}>
          Equivalent in Euro: €{euro}
        </h4>
      )}
    </div>
  );
};

export default CurrencyConvertor;
