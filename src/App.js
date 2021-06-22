import React, {useState} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Menu from './components/Menu'
import Notify from './components/Notify'
import './styles.css'
import { useApolloClient } from '@apollo/client'



const App = () => {
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const client = useApolloClient()
 
  const notify = (error) => {
    setErrorMessage(error)
    setTimeout(() =>{
      setErrorMessage(null)
    },5000)
  }
  const logout = () =>{
    setToken(null);
    localStorage.clear()
    client.resetStore()
  }

  if (!token){
     return (
       <>
      <div>
         <Notify errorMessage={errorMessage}/>
         <Login 
         setToken={setToken}
         setError={notify}
        />
       </div>
       <div>
       <SignUp setError={notify} />
       </div>
       </>
     )
  }

  return (
    <div>

      <div className='page-header'>
        <Menu />
        <button className='logout-button' onClick={logout}>logout</button>
      </div>

        <Switch>
          <Route exact={true} path='/'>
            <Books />
          </Route>

          <Route exact={true} path='/author'>
            <Authors />
          </Route>

          <Route exact path='/add_book'>
            <Notify errorMessage={errorMessage}/>
            <NewBook setError={notify}/>
          </Route>

          <Route component={() => <Redirect to='/'/>}/>

        </Switch>


    </div>
  )
}

export default App