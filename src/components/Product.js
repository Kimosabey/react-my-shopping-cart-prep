export default function Product({ product, onAdd }) {
  return (
    <div className='card'>
      <img className='small-img' src={product.image} alt='Denim Jeans' />
      <h1>{product.title.slice(1, 11)}</h1>
      <p>${product.price}</p>
      <p>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </p>
    </div>
  );
}
