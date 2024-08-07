const cart = JSON.parse(localStorage.getItem('cart')) || [];

const handleCart = (state=cart, action) => {
    const product = action.payload;
    let newState;

    switch(action.type) {
        case "ADD_ITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                newState = state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                newState = [...state, { ...product, qty: 1 }];
            }
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;

        case "DELETE_ITEM":
            const exist2 = state.find((x) => x.id === product.id);
            if (exist2.qty === 1) {
                newState = state.filter((x) => x.id !== exist2.id);
            } else {
                newState = state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;

        case "CLEAR_ITEM":
            newState = state.filter((x) => x.id !== product.id);
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;

        case "CLEAR_CART":
            newState = action.payload;
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState; 
        default:
            return state;
    }
}

export default handleCart;