import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="display-4 my-4">Welcome to Paradise Nursery</h1>
      <p className="lead">Your one-stop shop for all things green!</p>
      <Link to="/products" className="btn btn-primary btn-lg">Shop Now</Link>
    </div>
  );
}

export default Home;
