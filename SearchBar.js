import React from 'react';

const SearchBar = ({ query, setQuery, setLoading }) => {
    const handleSearch = (e) => {
        setQuery(e.target.value);
        setLoading(true);
        setTimeout(() => setLoading(false), 1000); // Simulate loading
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search profiles..."
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
