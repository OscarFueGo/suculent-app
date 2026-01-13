import Navbar from '../components/Navbar';

const Products = () => {
  return (
    <div>
      <div className="container" style={{ padding: '2rem' }}>
        <h1 style={{ color: 'var(--primary-color)' }}>Our Collection</h1>
        <p>Explore our wide variety of succulents and indoor plants.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {/* Placeholder for products */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} style={{ background: 'white', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <div style={{ height: '200px', backgroundColor: '#eee', borderRadius: '8px', marginBottom: '1rem' }}></div>
                    <h3>Succulent #{item}</h3>
                    <p>$15.00</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
