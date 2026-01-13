import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>Please login to view your cart</h2>
        <Link to="/login" className="btn">Login</Link>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1>Your Shopping Basket</h1>
      
      {cart.length === 0 ? (
        <p>Your basket is empty. <Link to="/products">Start shopping</Link></p>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cart.map((item) => (
              <div key={item.productId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Total: ${total.toFixed(2)}
          </div>
          <div style={{ textAlign: 'right', marginTop: '1rem' }}>
             <button style={{ fontSize: '1.2rem', padding: '0.8em 2em' }}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
