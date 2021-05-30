import actiontypes from '../actiontypes';

const initState = {
    Cart: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartReducer = (state = initState, action) => {

    let itemIndex;

    switch(action.type) {
        case actiontypes().cart.add:
            try {
                itemIndex = state.Cart.findIndex(product => product._id === action.payload._id)
                let _product = {
                    ...action.payload,
                    quantity: 1
                }
                console.log(itemIndex);
                itemIndex < 0
                ? state.Cart = [...state.Cart, _product]
                : state.Cart[itemIndex].quantity += 1

                state.totalAmount = getTotalAmount(state.Cart)
                state.totalQuantity = getTotalQuantity(state.Cart)
            }
            catch(err) {console.log(err);}
            return state

        case actiontypes().cart.remove:
            try{
                itemIndex = state.Cart.findIndex(product => product._id === action.payload)
          
                state.Cart[itemIndex].quantity === 1
                ? state.Cart = state.Cart.filter(product => product._id !== action.payload)
                : state.Cart[itemIndex].quantity -= 1
          
                state.totalAmount = getTotalAmount(state.Cart);
                state.totalQuantity = getTotalQuantity(state.Cart);
            }
            catch(err) {console.log(err)}
            return state

        case actiontypes().cart.delete:
            state.Cart = state.Cart.filter(product => product._id !== action.payload)
            state.totalAmount = getTotalAmount(state.Cart);
            state.totalQuantity = getTotalQuantity(state.Cart);
            return state;
            
            default:
            return state
    }
}

const getTotalQuantity = cart => {
    let total = 0;

    cart.foreach(product => {
        total += product.quantity
    })
    return total;
}

const getTotalAmount = cart => {
    let total = 0;

    cart.forEach(product => {
        total += product.price * product.quantity
    })
    return total
} 

export default cartReducer;