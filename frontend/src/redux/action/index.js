// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADD_ITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELETE_ITEM",
        payload:product
    }
}

// For Clear Item to Cart
export const clearItem = (product) =>{
    return {
        type:'CLEAR_ITEM',
        payload:product
    }
}

// For Clear Cart
export const clearCart = () =>{
    return {
        type:'CLEAR_CART',
        payload:[]
    }
}

// For Search Item 
export const searchItem = (product) =>{
    return {
        type:'SEARCH_ITEM',
        payload:product
    }
}

// For Get Items
export const getItems = (products) =>{
    return {
        type: 'GET_ITEMS',
        payload: products
    }
}

// For Get Categories 
export const getCat = (product) =>{
    return {
        type: 'GET_CAT',
        payload: product
    }
}

// For Get Prices 
export const getPrc = (range) => {
    return {
        type: 'GET_PRC',
        payload: range
    }
}


// For Order Place 
export const placeOrder = (orderData) => {
    return (dispatch) => {
    //   dispatch(placeOrderRequest());
  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(orderData),
        redirect: "follow"
      };
  
      fetch("http://20.47.65.95:8090/api/placeorder", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log("Result",result))
        .catch((error) => console.log("Error",error))
    };
  };