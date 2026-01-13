import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">BuenJardin 🌿</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
