import React, {useState} from 'react'
import Select from 'react-select'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS, UPDATE_AUTHOR } from '../queryServices/services'

const EditAuthor = ({authors}) => {
    // const [authorName, setAuthorName] = useState('')
    const [selectedOption, setSelectedOption] = useState(null)
    const [bornYear, setBornYear] = useState('')

    const options = authors.map(author => {
        return {
            label: author.name,
            value: author.id
        }
    })
  
    const [updateFunction] = useMutation(UPDATE_AUTHOR, {
      refetchQueries: [{ query: ALL_AUTHORS}]
    })
    
    const authorUpdate = (event) => {
    event.preventDefault();

    console.log(`we are currently updating author`)

    updateFunction({ variables: {
      name: selectedOption.label,
      setBornTo: parseInt(bornYear)
    }})

    setSelectedOption(options[0]);
    setBornYear('');


  }
    return (
        <div>
            <div className='birthday-change'>
            <h2>set birthyear</h2>
            <form onSubmit={authorUpdate}>
                <Select 
                defaultValue={options[0]}
                options={options}
                onChange={setSelectedOption}
                />
              {/* <div>
                name: 
                <input 
                type='text'
                value={authorName}
                onChange={({ target }) => setAuthorName(target.value)}/>
              </div> */}
              <div>
                Born: 
                <input 
                type='number'
                value={bornYear}
                onChange={({ target }) => setBornYear(target.value)}/>
              </div>
              <button type='submit'>Update Author</button>
            </form>
      </div>
            
        </div>
    )
}

export default EditAuthor
