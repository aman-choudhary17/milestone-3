const initialState = {
    items: [],
    filteredItems: [],
  };
  
  // Reducer function
  const handleItem = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "SEARCH_ITEM":
        const filteredItems = state.items.filter((i) =>
          i?.name.toLowerCase().includes(payload.toLowerCase())
        );
        return {
          ...state,
          filteredItems: filteredItems.length ? filteredItems : state.items
        };
      case "GET_ITEMS":
        console.log("Payload==>",payload)
        return {
          ...state,
          items: payload,
          filteredItems: payload,
        };

      case "GET_CAT":
        return {
            ...state,
            filteredItems: payload ? state.items.filter((i) => i.category === payload) : state.items
        }
        case "GET_PRC":
            return {
              ...state,
              filteredItems: payload ? (payload.min !== undefined 
                ? state.items.filter((i) => i.price >= payload.min && i.price <= (payload.max || Infinity)) 
                : state.items.filter((i) => i.price <= payload)) 
                : state.items
            }
      default:
        return state;
    }
  };
  
  export default handleItem;