import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loggedInUser} from '../../../store/actions/userActions'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const email = useRef()
    const password = useRef()

    const OnSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: email.current.value,
            password: password.current.value
        }

        dispatch(loggedInUser(user))
        history.push('/products')
    }

    return (
        <div>
            <form className="loginForm" onSubmit={OnSubmit}>
                <h1>Logga in</h1>
                <div className="loginForm-inputs">
                    <input type="email" placeholder="Email.." ref={email} />
                    <input type="password" placeholder="Lösenord.." ref={password} />
                        <div className="loginForm-button">
                            <button type="submit">Logga in</button>
                        </div>
                        <br/>
                        <div>
                            <Link to="/register" className="linked">Skapa ett konto!</Link>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Login
