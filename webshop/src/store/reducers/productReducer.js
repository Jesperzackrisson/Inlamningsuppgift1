import actiontypes from '../actiontypes';

  let initState = {
    products: [],
    product: null,
      
}

const productReducer = (state = initState, action) => {

        switch(action.type) {
        case actiontypes().products.setProducts:
           return {
              ...state,
               products: action.payload
             }
           case actiontypes().products.setProduct:
             return {
               ...state,
               product: action.payload
             }
           default:
             return state;
         }
  
       }

export default productReducer;