import React from 'react'
import './cart.css'
import {Scrollbars} from 'react-custom-scrollbars-2'
const Cart = () => {
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />      
          <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p classname="total-items">You have <span className="total-items-count">7</span> items in your shopping cart</p>

        <div className="cart-items">
          <div className="cart-items-container ">
            <Scrollbars>
            <div className="items-info">
              <div className="product-img">
                <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="product" />
              </div>
              <div className="title">
                <h2>Samsung S21</h2>
                <p>Black Color</p>
              </div>
              <div className="add-minus-quantity">
                <i className="fas fa-minus minus"  ></i>
                <input type="text" placeholder="2" />
                <i className="fas fa-plus add"></i>
              </div>
              <div className="price">
                <h3>2000rs</h3>
              </div>

              <div className="remove-item">
                <i className="fas fa-trash-alt remove"></i>
              </div>
            </div>
            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart