import React from 'react';

const Customer = ({ customer }) => (
  <div className="customer-card">
    <h3>{customer.name}</h3>
    <p>Orders: {customer.orders.join(', ')}</p>
  </div>
);

export default Customer;
