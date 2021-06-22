import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queryServices/services'
import '../styles.css'

let genresArray = 'refactoring agile patterns designs crime classic history allGenre'.split(' ');
console.log(genresArray)



const Books = () => {
  const [sorter, setSorter ] = useState('allGenre')

  const booksResult = useQuery(ALL_BOOKS)

   
  
  if(booksResult.loading){
    return (
      <div>
        <h3>data loading ///////////////////</h3>
      </div>
    )
  }

  let allBooks = booksResult.data.allBooks;
  const displayedBooks = sorter === 'allGenre' ? allBooks : allBooks.filter((filt) => filt.genres.includes(sorter))

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
          {displayedBooks.map((a, index) =>
            <tr key={index}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <div>
        {genresArray.map((unit) => {
          return (
            <span 
            onClick={() => setSorter(unit)}
            className={unit === sorter ? 'selected' : ''}>
              {unit}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Books