import React from "react";
import './search.css'
const Search = ({ handleChange }) => {
    return (
        <div className="Search-container">
            <input onChange={(e) => handleChange(e.target.value)}
                type="text" placeholder="Type Keywords" className="Search-input" />

        </div>
    )
}
export default Search