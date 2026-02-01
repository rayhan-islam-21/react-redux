//constant declare
import { combineReducers, createStore } from 'redux';
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";  

//inital state of products
const initialProductState = {
    product : ["Laptop"],
    numberOfProducts : 2
}

//initial state of cart
const initalCartState = {
    cart : ["Laptop"],
    numberOfItems : 1
}

//action declared of products

const getProducts =()=>{
    return {
        type:GET_PRODUCTS,
    }
}

const addProduct =(value)=>{
    return {
        type:ADD_PRODUCT,
        payload:value
    }
}


//action declared of cart
const getCartItems =()=>{
    return {
        type:GET_CART_ITEMS,
    }
}

const addCartItem =(value)=>{
    return {
        type:ADD_CART_ITEM,
        payload:value
    }
}
//product reducer

const productReducer =(state=initialProductState,action)=>{
            switch (action.type) {
                case GET_PRODUCTS:
                    return {
                        ...state
                    }
                case ADD_PRODUCT:
                    return{
                        product:[...state.product,action.payload],
                        numberOfProducts:state.numberOfProducts + 1
                    }
                default:
                    return state;
            }
}

//cart reducer

const cartReducer =(state=initalCartState,action)=>{
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return{
                cart:[...state.cart,action.payload],
                numberOfItems:state.numberOfItems + 1
            }
        default:
            return state;
    }
}


//rootreducer declared

const rootReducer = combineReducers({
    cartR:cartReducer,
    productR:productReducer
})



//create store

const store = createStore(rootReducer);

//subscribe store

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch store

store.dispatch(getProducts());
store.dispatch(getCartItems());
store.dispatch(addProduct("Tablet"));
store.dispatch(addCartItem("Mobile"));
