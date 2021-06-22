import React from 'react'
import {  useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../queryServices/services'
import EditAuthor from './EditAuthor'

const Authors = () => {
 
 
  const authorsResult = useQuery(ALL_AUTHORS)


  if(authorsResult.loading){
    return (
      <div>
        <h3>data loading ////////////</h3>
      </div>
    )
  }

  const authors = authorsResult.data.allAuthors
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>

      <div>
        <EditAuthor authors={authors}/>
      </div>

    </div>
  )
}

export default Authors