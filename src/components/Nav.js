import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className="pa3 pa4-ns">
    <Link
      to="/"
      className="link dim black b f6 f5-ns dib mr3"
      href="#"
      title="Home"
    >
      Monee
    </Link>
    <Link
      to="/"
      className="link dim gray    f6 f5-ns dib mr3"
      href="#"
      title="Home"
    >
      Home
    </Link>
    <Link
      to="/add"
      className="link dim gray    f6 f5-ns dib mr3"
      href="#"
      title="Add"
    >
      Track
    </Link>
  </nav>
);
