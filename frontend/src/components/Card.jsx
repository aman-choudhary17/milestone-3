import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCat, getItems, getPrc } from "../redux/action";

export const Card = () => {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catBtn, setCatBtn] = useState(0);
  const [prcBtn, setPrcBtn] = useState(0);
  let componentMounted = true;

  const filteredItems = useSelector((state) => state.handleItem?.filteredItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("http://20.47.65.95:8090/api/product");
    const data = await response.json()
    if (componentMounted) {
      dispatch(getItems(data?.data));
      setLoading(false);
    }

    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    setFilter(filteredItems);
  }, [filteredItems]);

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat, key) => {
    setCatBtn(key);
    dispatch(getCat(cat));
  };
  
  const filterPrice = (prc, key) => {
    setPrcBtn(key);
    dispatch(getPrc(prc));
  };

  const getButtonClassCat = (key) => {
    return key === catBtn ? "btn btn-outline-dark btn-sm m-2 active" : "btn btn-outline-dark btn-sm m-2";
  };
  
  const getButtonClassPrc = (key) => {
    return key === prcBtn ? "btn btn-outline-dark btn-sm m-2 active" : "btn btn-outline-dark btn-sm m-2";
  };


  const getButtons  = () => 
    <div className="buttons py-2">
    <button className={getButtonClassCat(0)} onClick={() => filterProduct("",0)}>All</button>
    <button className={getButtonClassCat(1)} onClick={() => filterProduct("Rack", 1)}>Rack</button>
    <button className={getButtonClassCat(2)} onClick={() => filterProduct("Shelf", 2)}>Shelf</button>
    <button className={getButtonClassCat(3)} onClick={() => filterProduct("Chair", 3)}>Chair</button>
    <button className={getButtonClassCat(4)} onClick={() => filterProduct("Table", 4)}>Table</button>    
    <button className={getButtonClassCat(5)} onClick={() => filterProduct("Drawer", 5)}>Drawer</button>  
    <button className={getButtonClassCat(6)} onClick={() => filterProduct("Bench", 6)}>Bench</button>  
  </div>
  

  const getPrices = () => (
    <div className="buttons py-2">
         <button className={getButtonClassPrc(0)} onClick={() => filterPrice(null, 0)}>All</button>
      <button className={getButtonClassPrc(1)} onClick={() => filterPrice(999.9, 1)}>Under 999.9$</button>
      <button className={getButtonClassPrc(2)} onClick={() => filterPrice({ min: 1000, max: 4999.99 }, 2)}>1000$ to 4999.99$</button>
      <button className={getButtonClassPrc(3)} onClick={() => filterPrice({ min: 5000 }, 3)}>5000$ and above</button>
    </div>
  );
  

  const ShowProducts = () => {
    return  <>
    {filter?.map((product) => (
      <div
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/product/${product.id}`)}
        id={product.id}
        key={product.id}
        className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
      >
        <div className="card text-center h-100" key={product.id}>
          <img
            className="card-img-top p-3"
            src={product.ImageURL}
            alt="Card"
            style={{
              height: "250px", // Set your desired height
              width: "100%",   // Set your desired width (100% for responsive)
              objectFit: "contain", // Ensure the entire image is visible
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{product?.name?.substring(0, 12)}</h5>
            <p className="card-text">
              {product?.description.substring(0, 90)}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product?.price}</li>
          </ul>
        </div>
      </div>
    ))}
    </>
  };

  return (
    <>
      <div className="container my-3 py-3">
      <div className="row">
      <div className="col-7">
        {/* Categories Heading centered in its column */}
        <h2 className="display-6">All Categories</h2>
      </div>
      <div className="col-5 text-center">
        {/* Price Heading centered in its column */}
        <h2 className="display-6">Prices</h2>
      </div>
      
      <div className="col-12">
        <hr />
      </div>
      </div>

        <div className="row">
        <div className="col-6">
          {getButtons()}
        </div>
        <div className="col-6 text-end">
          {getPrices()}
        </div>
        <div className="col-12">
          <hr />
        </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};