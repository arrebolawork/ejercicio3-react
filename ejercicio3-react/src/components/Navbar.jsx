import { Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='linkClass'>
        Home
      </Link>
      <Link to='/contact' className='linkClass'>
        Contact
      </Link>
      <Link to='/about' className='linkClass'>
        About
      </Link>
    </nav>
  );
}
