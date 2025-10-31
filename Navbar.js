
import { Link } from "react-router";
const Navbar = () => (
  <div className="nav-items">
    <ul>
      <li>
        <Link to="/"> App </Link>
      </li>
      <li>
        <Link to="/footer">Footer </Link>
      </li>
      <li>
        <Link to="/resmenu">ResMenu </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;