import './Navbar.styles.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavbar } from './Navbar.hooks';

const Navbar = () => {
  const {darkMode, setDarkMode} = useNavbar()
  

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Mini Grocery</Link>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <button onClick={() => setDarkMode(prev => !prev)} className="theme-btn">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;