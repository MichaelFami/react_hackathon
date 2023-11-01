import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import IndividualRecipe from './IndividualRecipe'
// import Categories from './Categories'

import CategoriesList from './Categories'
import CategoryDetails from './CategoryDetails'


const Main=()=>{
return(
    <div className="routes-container">
      <Routes>
      
      <Route  path="/" element={<Home />} />

      <Route  path="/categories" element={<CategoriesList/>} />
      <Route path="/categories/:cat" element={<CategoryDetails />}/>
      {/* <Route  path="/individualrecipe/:id" element={<IndividualRecipe  />} /> */}


      {/* <Route  path="/categorydetails" element={<CategoryDetails  />} /> */}
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}

      <Route  path="/individualrecipe/:id" element={<IndividualRecipe  />} />
      

      
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}


      </Routes>
    </div>
)

}

export default Main