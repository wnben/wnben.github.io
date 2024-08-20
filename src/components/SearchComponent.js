import React, { useState } from 'react';
import './SearchComponent.css'; // Import the CSS for SearchComponent

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 2) {
      const results = data.filter(item =>
        item.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="search-input"
      />
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((result, index) => (
            <li key={index} className="result-item">{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
