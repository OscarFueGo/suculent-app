import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { addToCart } = useCart();

  const products = [
      { id: 1, name: "Echeveria Elegans", price: 15.00, image: "/products/echeveria.png" },
      { id: 2, name: "Aloe Vera", price: 12.00, image: "/products/aloe.png" },
      { id: 3, name: "Snake Plant", price: 20.00, image: "/products/snake.png" },
      { id: 4, name: "Jade Plant", price: 18.00, image: "/products/echeveria.png" }, // Reusing image due to quota
      { id: 5, name: "Zebra Cactus", price: 10.00, image: "/products/aloe.png" }, // Reusing image due to quota
      { id: 6, name: "Burro's Tail", price: 22.00, image: "/products/snake.png" }, // Reusing image due to quota
  ];

  return (
    <div>
      <div className="container" style={{ padding: '2rem' }}>
        <h1 style={{ color: 'var(--primary-color)' }}>Our Collection</h1>
        <p>Explore our wide variety of succulents and indoor plants.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {products.map((product) => (
                <div key={product.id} style={{ background: 'white', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <div style={{ height: '200px', backgroundColor: '#eee', borderRadius: '8px', marginBottom: '1rem', backgroundImage: `url(${product.image})`, backgroundSize: 'cover' }}></div>
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
