import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Menu from './components/Menu'
import './styles.css'



const App = () => {

  return (
    <div>

      <div>
        <Menu />
      </div>

        <Switch>
          <Route exact={true} path='/'>
            <Books />
          </Route>

          <Route exact={true} path='/author'>
            <Authors />
          </Route>

          <Route exact path='/add_book'>
            <NewBook />
          </Route>

          <Route component={() => <Redirect to='/'/>}/>

        </Switch>


    </div>
  )
}

export default App