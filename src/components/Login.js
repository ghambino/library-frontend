import React, { useState, useEffect} from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../queryServices/services'


const Login = ({setToken, setError}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    const [createLogin, result] = useMutation(LOGIN_USER, {
        onError: (error) => {
            setError(error.graphQLErrors[0].message)
        }
    });
  
    const loginHandler = event => {
      event.preventDefault();
  
      createLogin({ variables: {
        username,
        password
      }})
    }
  
    useEffect(() => {
      if(result.data){
        const genToken = result.data.login.value;
        setToken(genToken)
        window.localStorage.setItem('login_token', genToken)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result.data])
    return (
        <div className='login-container'>
            <h2>Login here</h2>
            <form onSubmit={loginHandler}>
                <div>
                    <label for='username'>Username</label>
                    <input 
                    type='text'
                    id='username'
                    required={true}
                    value={username}
                    onChange={({target}) => setUsername(target.value)}
                    />
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input 
                    type='password'
                    id='password'
                    required={true}
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
           
        </div>
    )
}


export default Login
