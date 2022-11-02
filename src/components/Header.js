import React from 'react';

export default function Header({ countCartItems }) {
  const count = countCartItems ? (
    <button className='badge'>{countCartItems}</button>
  ) : (
    ''
  );
  return (
    <header class='row block center'>
      <div>
        <a href='#/'>
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>Cart {count}</a>
        <a href='#/signin'>Sigin</a>
      </div>
    </header>
  );
}
