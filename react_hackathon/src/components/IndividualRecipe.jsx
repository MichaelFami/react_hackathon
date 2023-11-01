//show /details page
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const IndividualRecipePage = (props) => {
  //use params takes some information from the browser url (name, id, username...)
  //and passes it into the code to be used as a Parameter/Argument somewhere
  let { id } = useParams();
  console.log(id);
  // let id = 52772
  const [individualRecipe, setIndividualRecipe] = useState("");

  useEffect(() => {
    const getIndividualRecipe = async () => {
      const response =
      await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}
      `);
      setIndividualRecipe(response.data.meals[0]);
    };
    getIndividualRecipe();
  }, []);

  console.log(individualRecipe);

  return individualRecipe ? (
    <div className="detail">
      <h2>{individualRecipe.strMeal}</h2>
      <h3>Instructions:</h3>
      <p>{individualRecipe.strInstructions}</p>

      <Link to={`/categories/${individualRecipe.strCategory}`}>Back to Category Listings</Link>
    </div>
  ) : null;
};

export default IndividualRecipePage;
