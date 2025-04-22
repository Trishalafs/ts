import React, { useState, createContext, useContext } from 'react';
import Menu from './components/Menu';
import CustomersList from './components/CustomersList';

// Create Context for global state
const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

// Sample dynamic data
const sampleCustomers = [
  { id: 1, name: 'Alice', orders: ['Pizza', 'Burger'] },
  { id: 2, name: 'Bob', orders: ['Pasta', 'Salad'] }
];
const sampleMenu = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Soup'];

const RestaurantProvider = ({ children }) => {
  const [customers, setCustomers] = useState(sampleCustomers);
  const [menu] = useState(sampleMenu);

  return (
    <RestaurantContext.Provider value={{ customers, setCustomers, menu }}>
      {children}
    </RestaurantContext.Provider>
  );
};

const App = () => {
  return (
    <RestaurantProvider>
      <div className="container">
        <h1>Restaurant App</h1>
        <Menu />
        <CustomersList />
      </div>
    </RestaurantProvider>
  );
};

export default App;
