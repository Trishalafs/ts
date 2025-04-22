import React from 'react';
import { useRestaurant } from '../App';
import Customer from './Customer';

const CustomersList = () => {
  const { customers } = useRestaurant();
  return (
    <div className="customers">
      <h2>Customers</h2>
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
};

export default CustomersList;
