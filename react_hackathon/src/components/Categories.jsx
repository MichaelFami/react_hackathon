import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CategoriesList = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        const getCategories = async () => {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            console.log(response.data.categories);
            setCategories(response.data.categories);
        }
        getCategories()
}, [])

return (
    <div>
      {categories.map((category) => (
            <Link to = {`/categories/${category.strCategory}`}>

            <div>
                
                <img src={category.strCategoryThumb}></img>
                <p>{category.strCategory}</p>
                <p>{category.strCategoryDescription}</p>
            </div> 
            </Link>
        ))}
    </div>

)}

export default CategoriesList