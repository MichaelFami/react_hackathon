import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

export default function CategoryDetails() {
    let {cat} = useParams()
    console.log(cat)

    const [category, setCategory] = useState("")

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            console.log(response.data.meals)
            setCategory(response.data.meals)
        }
        getCategory()
    },[])

    return category ? (
        <div>
             {category.map((meal) => (
            <Link to = {`/individualrecipe/${meal.idMeal}`} key = {meal.idMeal}>
                <div>
                    <p>{meal.strMeal}</p>
                    <img src={meal.strMealThumb}></img>
                </div> 
            </Link>
        ))}

            <Link to = "/categories">Return to Categories</Link>
        </div>
    ) : (
        <h3>Finding category recipes...</h3>
    )
}