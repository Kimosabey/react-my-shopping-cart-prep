import Product from './Product';

export default function HomeShop({ products, onAdd }) {
  return (
    <main className='block col-2'>
      <h2>Products</h2>
      <div className='row wrap'>
        {products.map((product, i) => (
          <Product key={i} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
