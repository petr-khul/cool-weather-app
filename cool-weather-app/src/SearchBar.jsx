import React, { useState } from 'react'

function SearchBar() {
  
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputchange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(searchQuery) //for debugging purposes of functionality testing
    }
  
    return (
    <div>
      <input
        type="text"
        placeholder="Search a location..."
        value={searchQuery}
        onChange={handleInputchange}
      />
      <button type="submit" onClick={handleSearchSubmit}>Submit</button>
      
      
    </div>
  )
}

export default SearchBar
