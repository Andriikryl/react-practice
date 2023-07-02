import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container">
      <div>nav</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </ul>
      <button>
        Cart <div>3</div>
      </button>
    </div>
  );
}
