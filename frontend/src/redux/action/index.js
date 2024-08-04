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