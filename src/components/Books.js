import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queryServices/services'


const Books = () => {
  const booksResult = useQuery(ALL_BOOKS)

  if(booksResult.loading){
    return (
      <div>
        <h3>data loading ///////////////////</h3>
      </div>
    )
  }
  const allBooks = booksResult.data.allBooks
  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>Book Title</th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {allBooks.map((a, index) =>
            <tr key={index}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Books