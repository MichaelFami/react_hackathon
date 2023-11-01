

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import IndividualRecipe from './IndividualRecipe'
// import Categories from './Categories'

const Main=()=>{
return(
    <div className="routes-container">
      <Routes>
      
      <Route  path="/" element={<Home />} />

      {/* <Route  path="/categories" element={<Categories  />} /> */}
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}
      {/* <Route  path="/categorydetails" element={<CategoryDetails  />} /> */}
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}
      <Route  path="/individualrecipe/:id" element={<IndividualRecipe  />} />
      

      </Routes>
    </div>
)

}

export default Main