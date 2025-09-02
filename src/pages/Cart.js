import React, { useContext } from 'react';
import { CartContext } from '../CartContext.js';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div className="card mb-3" key={item.id}>
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Unit Cost: ${item.cost}</p>
                    <p className="card-text">Total Cost: ${item.cost * item.quantity}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="btn btn-danger ms-3" onClick={() => removeFromCart(item.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3>Total: ${getTotalCost()}</h3>
            <div>
              <Link to="/products" className="btn btn-secondary me-2">Continue Shopping</Link>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
