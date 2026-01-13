import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';


const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">BuenJardin 🌿</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {user ? (
            <>
                <li><Link to="/cart">Cart ({cart.length})</Link></li>
                <li><button onClick={handleLogout} style={{ fontSize: '0.9rem', padding: '0.4em 0.8em', background: 'none', border: '1px solid white', color: 'white' }}>Logout ({user.username})</button></li>
            </>
          ) : (
             <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
