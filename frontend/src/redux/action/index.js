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
export const clearCart = (product) =>{
    return {
        type:'CLEAR_ITEM',
        payload:product
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