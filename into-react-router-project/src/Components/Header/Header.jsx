import { Outlet } from 'react-router-dom';
import About from '../About/About';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h2>NavBar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="posts">Posts</Link>
      </nav>

      <Outlet></Outlet>
      <About></About>
    </div>
  );
};

export default Header;
