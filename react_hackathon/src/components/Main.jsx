import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import IndividualRecipe from './IndividualRecipe'
import CategoriesList from './Categories'
import CategoryDetails from './CategoryDetails'

const Main=()=>{
return(
    <div className="routes-container">
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/categories" element={<CategoriesList/>} />
      <Route path="/categories/:cat" element={<CategoryDetails/>} />
      <Route path="/individualrecipe/:id" element={<IndividualRecipe/>} />
      
      </Routes>
    </div>
)
}

export default Main