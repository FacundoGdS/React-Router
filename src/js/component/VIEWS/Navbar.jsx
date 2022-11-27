import React from "react";
import { Link } from "react-router-dom";
//Better use link from react-router-dom than anchor tag and href atribute.
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
//If you inspect the network of the browser using anchors you'll see its requests.
export default Navbar;

//Note: Next.js allows you to specify if you want to render on client or server.
