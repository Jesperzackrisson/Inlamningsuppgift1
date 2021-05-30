const actiontypes = () => {
    return {
     products: {
         loading: 'LOADING',
         getProducts: 'GET_PRODUCTS',
         setProducts: 'SET_PRODUCTS',
         setProduct: 'SET_PRODUCT'  
     },
     cart: {
        add: 'ADD_TO_CART',
        remove: 'REMOVE_FROM_CART',
        delete: 'DELETE_FROM_CART'
     },
     auth: {
        loginUser: 'LOGIN_USER',
        logoutUser: 'LOGOUT_USER',
        registerUser: 'REGISTER_USER',
        checkUser: 'CHECK_USER'
        


     } ,
     users: {
         setUser: 'SET_USER',
         setLoggedin: 'SET_LOGGEDIN',
         setLogoutUser: 'SET_LOGOUT_USER',

     }
    }
}

export default actiontypes;