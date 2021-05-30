import React from 'react'

const Register = () => {

    



    return (
        <div>
            <form className="registerForm">
                <h1>Registera</h1>
                    <div className="registerForm-inputs">
                        <input 
                            type="text" 
                            placeholder="Förnamn.."
                            // value={this.state.firstName}
                            // onChance={this.onChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Efternamm.."
                            // value={this.state.lastName}
                        />
                        <input 
                            type="email" 
                            placeholder="Email.."
                            // value={this.state.email}
                        />
                        <input 
                            type="password" 
                            placeholder="Password.."
                            // value={this.state.password}
                        />
                        <div className="registerForm-button">
                            <button>Skapa användare</button>
                        </div>
                    </div>
            </form>
        </div>
    )
}

export default Register
