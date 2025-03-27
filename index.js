const { createStore, combineReducers } = require('redux');

// constants
// products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// state
// products state
const initialProductsState = {
    products: ["Laptop", "Desktop", "Mobile"],
    numberOfProducts: 3
}

// carts state
const initialCartState = {
    carts: ['Desktop'],
    numberOfCarts: 1
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

// cart actions
const getAllCartsAction = () => {
    return {
        type: GET_CART_ITEMS
    }
};
const addCartAction = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart
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

// carts reducer
const cartsReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }

        case ADD_CART_ITEM:
            return {
                carts: [...state.carts, action.payload],
                numberOfCarts: state.numberOfCarts + 1
            }
    
        default:
            return state;
    }
}

// combine reducer
const rootReducer = combineReducers({
    productsR: productsReducer,
    cartsR: cartsReducer
})

// store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addProductAction('Car'));
// store.dispatch(getAllProductsAction());

store.dispatch(addCartAction('Bike'));
// store.dispatch(getAllCartsAction());+