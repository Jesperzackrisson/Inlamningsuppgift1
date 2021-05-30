import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProducts = () => {
    return async dispatch => {
        // dispatch(loading(true));

        const res = await axios.get('http://localhost:9999/api/products');

        
            dispatch(setProducts(res.data));
            // dispatch(loading(false));
        
    }
}
export const getOneProduct = _id => {
     return async dispatch => {
        //  dispatch(loading(true));

         const res = await axios.get(`http://localhost:9999/api/products/${_id}`)

         
             dispatch(setProduct(res.data));
            //  dispatch(loading(false));
         
     }
}



export const setProduct = (product) => {
    return {
        type: actiontypes().products.setProduct,
        payload: product
    }
}
export const setProducts = products => {
    return {
        type: actiontypes().products.setProducts,
        payload: products
    }
}