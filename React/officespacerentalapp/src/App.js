import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Office Space Rental Portal</h1>;

  const officeImageAttr = {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    alt: 'Modern Office Space',
    style: { width: '100%', maxHeight: '250px', objectFit: 'cover', borderRadius: '8px' }
  };

  const primaryOffice = {
    Name: 'TechPark Innovation Hub',
    Rent: 75000,
    Address: 'Sector 5, Salt Lake, Kolkata'
  };

  const officeList = [
    { id: 1, Name: 'Cyber City Suite', Rent: 45000, Address: 'DLF Phase 3, Gurugram' },
    { id: 2, Name: 'Executive Heights', Rent: 65000, Address: 'BKC, Mumbai' },
    { id: 3, Name: 'Startup Bay Workspaces', Rent: 52000, Address: 'Koramangala, Bengaluru' },
    { id: 4, Name: 'Prestige Financial Tower', Rent: 85000, Address: 'HITEC City, Hyderabad' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      {heading}
      
      <div style={{ marginBottom: '20px' }}>
        <img src={officeImageAttr.src} alt={officeImageAttr.alt} style={officeImageAttr.style} />
      </div>

      <div style={{ backgroundColor: '#eef2f5', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
        <h2>Featured Office</h2>
        <p><strong>Name:</strong> {primaryOffice.Name}</p>
        <p>
          <strong>Rent:</strong>{' '}
          <span style={{ color: primaryOffice.Rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
            ₹{primaryOffice.Rent} / month
          </span>
        </p>
        <p><strong>Address:</strong> {primaryOffice.Address}</p>
      </div>

      <h2>Available Office Spaces</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {officeList.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', backgroundColor: '#fff' }}>
            <h3>{item.Name}</h3>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: item.Rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
                ₹{item.Rent} / month
              </span>
            </p>
            <p><strong>Address:</strong> {item.Address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
