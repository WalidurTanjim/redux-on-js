const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// constants
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// state
// products state
const initialProductsState = {
    products: ["Laptop", "Desktop", "Mobile"],
    numberOfProducts: 3
}

// actions
// products actions
const getAllProductsAction = () => {
    return {
        type: GET_PRODUCTS
    }
};
const addProductAction = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

// reducer
// products reducer
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
    
        default:
            return state;
    }
}

// store
const store = createStore(productsReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getAllProductsAction());
store.dispatch(addProductAction('Watch'));