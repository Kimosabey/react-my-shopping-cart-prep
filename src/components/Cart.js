export default function Cart({ cartItems, onAdd, onRemove }) {
  console.log('In Cart Cartitems', cartItems);
  const itemsPrice = cartItems.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>

      <div>
        {cartItems.length === 0 && <div className='card'>Cart is Empty</div>}
      </div>

      {cartItems.map((item, i) => (
        <div key={i} className='row'>
          <div className='col-2'>{item.title.slice(0, 5)}</div>
          <div className='col-2'>
            <button className='add' onClick={() => onAdd(item)}>
              +
            </button>
            <button className='remove' onClick={() => onRemove(item)}>
              -
            </button>
          </div>

          <div className='col-2 text-right'>
            {item.qty} X ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className='row'>
            <div className='col-2 text-left'>Items Price</div>
            <div className='col-1 text-right'>{itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2 text-left'>Tax Price</div>
            <div className='col-1 text-right'>{taxPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2 text-left'>Shipping Price</div>
            <div className='col-1 text-right'>{shippingPrice.toFixed(2)}</div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col-2 text-left'>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>
              <strong>{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
      <hr />
      <button
        onClick={() => {
          alert('Implement CheckOut');
        }}
      >
        Checkout
      </button>
    </aside>
  );
}
