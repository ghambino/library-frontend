import React, { useState } from 'react'
import { ADDING_NEWBOOK, ALL_BOOKS, ALL_AUTHORS } from '../queryServices/services'
import { useMutation } from '@apollo/client'

const NewBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuhtor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const [createNewBook] = useMutation(ADDING_NEWBOOK, {
    refetchQueries: [ { query: ALL_BOOKS && ALL_AUTHORS }]
  })

  const submit = async (event) => {
    event.preventDefault()
    console.log(published)
    
    createNewBook({ variables: { 
      title: title, 
      author: author, 
      published: parseInt(published), 
      genres: genres
     }
    })
    
    console.log('add book...')

    setTitle('')
    setPublished('')
    setAuhtor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div className='bookInput'>
          title:  
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className='bookInput'>
          author:  
          <input
            value={author}
            onChange={({ target }) => setAuhtor(target.value)}
          />
        </div>
        <div className='bookInput'>
          published:  
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div className='bookInput'>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div className='bookInput'>
          genres: {genres.join(' ')}
        </div>
        <br />
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default NewBook