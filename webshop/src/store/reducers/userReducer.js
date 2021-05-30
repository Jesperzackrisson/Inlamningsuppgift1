import actiontypes from '../actiontypes'

let initState = {
    loggedIn: false,
    loggedInUser: null
}

const userReducers = (state = initState, action) => {

    switch(action.type){
        case actiontypes().users.setUser: 
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                loggedInUser: action.payload.loggedInUser
        }
        case actiontypes().users.setLoggedin: 
            return {
                ...state,
                loggedIn: action.payload
        }
        case actiontypes().users.setLogoutUser:
            return {
                ...state,
                loggedIn: false
            }

        default:
            return state

    }
}

export default userReducers