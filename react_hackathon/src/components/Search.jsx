import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const initialState = {
    meal: '',
    data: null
  };

  const [searchState, setSearchState] = useState(initialState);

  const getMeal = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchState.meal}`);
    console.log(response);
    setSearchState({ ...searchState, data: response.data.meals[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchState);
    getMeal();
    setSearchState(initialState);
  };

  const handleChange = (e) => {
    setSearchState({ ...searchState, meal: e.target.value });
  };

  return (
    <div className='foodSearch'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search for a meal' onChange={handleChange} value={searchState.meal} />
        <button type='submit'>Find</button>
      </form>
      {searchState.data && (
        <div>
          <h2>{searchState.data.strMeal}</h2>
          <img src={searchState.data.strMealThumb} alt={searchState.data.strMeal} />
          <p>{searchState.data.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
