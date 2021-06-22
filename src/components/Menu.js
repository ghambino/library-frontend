import React from 'react'
import {Link} from 'react-router-dom'
import '../styles.css'

const Menu = () => {
    return (
        <div>
            <Link to='/' className='links'>Books</Link>
            <Link to='/author' className='links'>Authors</Link>
            <Link to='/add_book' className='links'>Add Book</Link>
            
        </div>
    )
}

export default Menu
