import React from 'react';
import { MdSearch } from 'react-icons/md';

import '../assets/css/components/Search.css';

const Search = ({ handleSearch }) => {
    return(
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input onChange={(event)=>handleSearch(event.target.value)} type="text" placeholder="Type to search..." />
        </div>
    )  
}

export default Search;