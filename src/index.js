import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { setContext } from 'apollo-link-context';
import App from './App'


const authLink = setContext((_, { headers }) => {
    let token = localStorage.getItem('login_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : null,
        }
    }
})

const httpLink = new HttpLink({
    uri: 'http://localhost:4000'
});


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
})

ReactDOM.render(
<Router>
<ApolloProvider client={client}>
    <App />
</ApolloProvider>
</Router>,
document.getElementById('root'))