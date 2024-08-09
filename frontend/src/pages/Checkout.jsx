import React, { useState } from "react";
import { CustomModal, Navbar, Paypal } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, placeOrder } from "../redux/action";
import { getCurrentDate } from "../utils";

export const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [show, setShow] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    country: '',
    city: '',
  });

  const { country, city } = formData;

  const onChange = e => {
    e.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };


  const handlePlaceOrder = (amount) => {
    const orderData = {
      address1: `west 111`,
      address2: `${formData.country} ${formData.city}, 94043`,
      customerName: 'John Doe',
      payment_method: "Delivery Items Receipt",
      emailId: "shahzaib@mailinator.com",
      total: amount.toString(), // Use the amount parameter directly
      order_date: getCurrentDate()
    };
  
    dispatch(placeOrder(orderData));
    console.log("Order Data", orderData);
  };
  

  const handleClose = () => {
    dispatch(clearCart());
    navigate('/');
    setShow(false);
  }
  const handleShow = () => setShow(true);
  
  
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 10.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation">
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John"
                          required
                          name="firstname"
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Doe"
                          required
                          name="lastname"
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="you@example.com"
                          required
                          name="emailId"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="West 110"
                          required
                          name="street"
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-md-6 my-1">
                        <label className="form-label">
                          Country
                        </label>
                        <br />
                        <select
                         className="form-select" 
                         value={country} 
                         name="country" 
                         onChange={(e) => onChange(e)}
                         required>
                          <option value="">Please Select</option>
                          <option value="Germany">Germany</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-6 my-1">
                        <label className="form-label">
                          City
                        </label>
                        <br />
                        <select 
                        className="form-select"
                        name="city" 
                        value={city}
                        onChange={(e) => onChange(e)}
                        required>
                        <option value="">Please Select</option>
                          <option value="Frankfurt">Frankfurt</option>
                          <option value="Berlin">Berlin</option>
                          <option value="Munich">Munich</option>
                          <option value="Hamburg">Hamburg</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                    </div>


                    <hr className="my-4" />

                    <h4 className="mb-3" id="payment">Payment Methods</h4>
                    <hr className="my-4" />


                    <Paypal handleShow={handleShow} handlePlaceOrder={handlePlaceOrder} amount={Math.round(subtotal + shipping)} />
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
        {show && <CustomModal handleClose={handleClose} />}
      </div>
    </>
  );
};
