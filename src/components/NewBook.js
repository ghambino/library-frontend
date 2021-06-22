import React, { useState } from 'react'
import { ADDING_NEWBOOK, ALL_BOOKS, ALL_AUTHORS } from '../queryServices/services'
import { useMutation } from '@apollo/client'


const NewBook = ({setError}) => {
  const [title, setTitle] = useState('')
  const [author, setAuhtor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const [createNewBook] = useMutation(ADDING_NEWBOOK, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    },
    refetchQueries: [ { query: ALL_BOOKS && ALL_AUTHORS }]
    // update: (store, response) => {
    //   const dataInStore = store.readQuery({ query: ALL_BOOKS && ALL_AUTHORS});
    //   store.writeQuery({
    //     query: ALL_BOOKS && ALL_AUTHORS,
    //     data: {
    //       ...dataInStore,
    //       allBooks: [ ...dataInStore.allBooks, response.data.addingNewBook],
    //       allAuthors: [...dataInStore.allAuthors, response.data.addingNewBook]
    //     }
    //   })
    // }
  })

  const submit = async (event) => {
    event.preventDefault();
    
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
          <label for='title'>title:</label>  
          <input
            type='text'
            id='title'
            required={true}
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className='bookInput'>
          <label for='author'>author: </label> 
          <input
            type='text'
            id='title'
            required={true}
            value={author}
            onChange={({ target }) => setAuhtor(target.value)}
          />
        </div>
        <div className='bookInput'>
          <label for='published'>published: </label> 
          <input
            type='number'
            id='published'
            required={true}
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div className='bookInput'>
          <input
            type='text'
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