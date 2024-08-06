import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Navbar } from "../components";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const notify = () => toast.success("Item added!");

  const addProduct = (product) => {
    notify();
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
     <div className="container my-2">
      <div className="row">
        <div key={product.id} 
        className="d-flex align-items-center col-md-5 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            style={{
              height: "400px", // Set your desired height
              width: "100%", // Set your desired width (100% for responsive)
              objectFit: "contain", // Ensure the entire image is visible
            }}
          />
        </div>

        <div className="col-md-7 col-sm-12 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <Link
            onClick={() => dispatch(addCart(product))}
            to="/checkout"
            className="btn btn-dark"
          >
            Buy Now
          </Link>
          <Link
            to="/cart"
            onClick={() => addProduct(product)}
            className="btn btn-outline-dark mx-3"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};
