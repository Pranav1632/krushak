// src/pages/status/StatusPage.js
import React, { useEffect, useState } from 'react';
import './StatusPage.css';

const StatusPage = () => {
  const [forms, setForms] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not logged in. Please log in first.');
        setLoading(false);
        return;
      }

      const res = await fetch('http://localhost:8000/api/status/my-status', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setForms(data);
      } else {
        setError(data.message || 'Failed to fetch status');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="status-container">
      <h2>Your Submitted Forms</h2>
      {forms.length === 0 ? (
        <p>No forms submitted yet.</p>
      ) : (
        forms.map((form, index) => (
          <div key={index} className="status-card">
            <p><strong>Category:</strong> {form.category}</p>
            {form.category === 'Farmer' ? (
              <>
                <p><strong>Crop Name:</strong> {form.cropName}</p>
                <p><strong>Crop Type:</strong> {form.cropType}</p>
                <p><strong>Production Area:</strong> {form.productionArea}</p>
              </>
            ) : (
              <>
                <p><strong>Product Name:</strong> {form.productName}</p>
                <p><strong>Product Type:</strong> {form.productType}</p>
                <p><strong>Weight/Units:</strong> {form.weightOrUnits}</p>
              </>
            )}
            <p><strong>Quantity:</strong> {form.quantity}</p>
            <p><strong>Min Price:</strong> {form.minPrice}</p>
            <p><strong>Max Price:</strong> {form.maxPrice}</p>
            <p><strong>Delivery Method:</strong> {form.deliveryMethod}</p>
            <p><strong>Address:</strong> {form.address}</p>
            <p><strong>Payment Status:</strong> {form.paymentStatus}</p>
            <p><strong>Registered:</strong> {form.registeredStatus ? 'Yes' : 'No'}</p>
            <p><strong>Deal Done:</strong> {form.dealDone ? 'Yes' : 'No'}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default StatusPage;
