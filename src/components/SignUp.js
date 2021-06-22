import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_NEWUSER } from '../queryServices/services';


const SignUp = ({setError}) => {
    const [username, setUsername ] = useState('');
    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');
    const [favoriteGenre, setFavoriteGenre] = useState('')

    const [createUser] = useMutation(CREATE_NEWUSER, {
        onError: (error) => {
            setError(error.graphQLErrors[0].message)
        }
    })

    const formSubmiter = (event) => {
        event.preventDefault();

        createUser({ variables: {
            username,
            name,
            password,
            favoriteGenre
        }});

        setUsername('');
        setName('');
        setPassword('');
        setFavoriteGenre('');
    }

    return (
        <>
        <div className='container'>
            <h2>Register here as a new user</h2>
                <form onSubmit={formSubmiter}>
                    <div>
                        <label for='username'>Username: </label>
                        <input
                        id='username'
                        type='text'
                        required={true}
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}/>
                    </div>
                    <div>
                        <label for='name'>Name: </label>
                        <input
                        id='name'
                        type='text'
                        required={true}
                        value={name}
                        onChange={({ target }) => setName(target.value)}/>
                    </div>
                    <div>
                        <label for='password'>Password: </label>
                        <input
                        id='password'
                        type='text'
                        required={true}
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}/>
                    </div>
                    <div>
                        <label for='favourite'>FavoriteGenre: </label>
                        <input
                        id='favorite'
                        type='text'
                        required={true}
                        value={favoriteGenre}
                        onChange={({ target }) => setFavoriteGenre(target.value)}/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            </>
    )
}


export default SignUp
