import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import CategoriesList from './Categories'

const Main=()=>{
return(
    <div className="routes-container">
      <Routes>
      
      <Route  path="/" element={<Home />} />

      <Route  path="/categories" element={<CategoriesList/>} />
      {/* <Route path="/categories/:category" element={<CategoryDetails />}/> */}
      {/* <Route  path="/categorydetails" element={<CategoryDetails  />} /> */}
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}
      {/* <Route  path="/individualrecipe" element={<IndividualRecipe  />} /> */}
      {/* <Route path="/categories/:id" element={<StarShipPage />}/> */}

      </Routes>
    </div>
)

}

export default Main