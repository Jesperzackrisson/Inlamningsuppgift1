import axios from 'axios';
import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken'




export const loggedInUser = (data) => {
        return dispatch => {

        axios.post('http://localhost:9999/api/users/login', data)
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
            }
            
        })
        .catch(err => console.log(err) )
    }
}
export const logoutUser = () => {
    return dispatch => {
        let token = localStorage.getItem('token');

        if (token) {
            localStorage.removeItem('token');
            dispatch(setLogoutUser());
        }
    }
}
export const registerUser = (_user) => {
    return dispatch => {
        const user = {
            email: _user.email,
            password: _user.password
        }
        axios.post('http://localhost:9999/api/users/register', _user)
        dispatch(setUser(user))
    }
}
export const setUser = (user) =>  {
    return {
        type: actiontypes().users.setUser,
        payload: {
            loggedInUser: user,
            loggedIn: true
        }
    }
}
export const setLogoutUser = () => {
    return {
        type: actiontypes().users.setLogoutUser,
        payload: {
            loggedInUser: null,
            loggedIn: false
        }
    }
}
export const checkUser = () => {

    return dispatch => {
        
        let token = localStorage.getItem('token')

        const user = jwt.decode(token)

        if(token) {
        
            dispatch(setUser(user))
        } 
    }
}



