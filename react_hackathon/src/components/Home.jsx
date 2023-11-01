import React from 'react';
import Search from './Search';


const Home =()=>{

    return(
        <div>
            <h1>CRAVE</h1>
            <h2>Dinner.</h2>
            <h2>But make it sexy.</h2>
            <h3>Welcome to CRAVE.  Find a meal to satisfy what you're craving. Choose a category to see a selection of recipes to fulfill your appetite.</h3>
            <h2>What do you crave?</h2>


            {/* Add the Search component here */}
      <Search />

        </div>
    )
}

export default Home