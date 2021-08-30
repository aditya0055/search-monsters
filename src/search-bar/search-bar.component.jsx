import React from 'react'
import './search-bar.style.css'

const SearchBar = ({placeholder, handleChange}) => {
    return (
        <div>
            <input type="text" className='search' placeholder={placeholder} name="searchField" onChange={handleChange} />
        </div>
    )
}

export default SearchBar
