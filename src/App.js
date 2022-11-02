import { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import HomeShop from './components/HomeShop';
import data from './data';

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log('onAdd exist', exist);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  console.log('cartItems :', cartItems);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    console.log('onRemove exist', exist);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className='App'>
      <Header countCartItems={cartItems.length} />
      <div className='row'>
        <HomeShop onAdd={onAdd} products={products} />
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
