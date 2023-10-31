//show /details page
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'


const IndividualRecipePage = (props) => {
  //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams()
  console.log(id)
  const [individualRecipe, setIndividualRecipe] = useState('')

  useEffect(()=>{
    const getIndividualRecipe = async() => {
      const response = await axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}
      `)
      setIndividualRecipe(response)
    }
    getIndividualRecipe()
  },[])

  console.log(individualRecipe)

  return individualRecipe ? (
    <div className="detail">
      <p>{individualRecipe.name}</p>
      
      

      <Link to="/individualRecipe">Back to Listings</Link>
    </div>
  ) : null;
}

export default IndividualRecipePage