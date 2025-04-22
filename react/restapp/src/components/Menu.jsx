import React from 'react';
import { useRestaurant } from '../App';

const Menu = () => {
  const { menu } = useRestaurant();
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
