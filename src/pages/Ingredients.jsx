import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import {getRecipeFromIngredients} from '../utils/ai'
import Recipe from '../components/Recipe'
import CookingAnimation from '../components/CookingAnimation'

function Ingredients() {
  const [ingredient, setIngredient] = useState('')
  const [ingredientList, setIngredientList] = useState([])
  const [recipe,setRecipe] = useState('')
  const [isLoading,setIsLoading] = useState(false);

  const generateRecipe = async () => {
    setIsLoading(true); // Start animation
    const recipe = await getRecipeFromIngredients(ingredientList);
    setRecipe(recipe);
    setIsLoading(false); // Stop animation
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIngredient('')
    console.log(ingredientList);
    // await generateRecipe();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Input Form */}
      <form
        className="p-10 flex flex-row items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="outline-none w-96 py-2 px-4 bg-[#FFE5C4] shadow-md rounded-lg placeholder-gray-600"
          placeholder="Enter ingredient at hand"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)} // Controlled Input
        />
        <Button content="Add Ingredient" onClick={(e) =>(setIngredientList([...ingredientList,ingredient]))} />
      </form>

      {/* Display Ingredient List */}
      <div className="mt-5 mb-5 bg-[#FFE5C4] w-96 text-center rounded-3xl shadow-lg">
        {
          ingredientList.length > 0 && 
          <>
            <h3 className="text-lg font-semibold py-3 border-b border-orange-300">Ingredients List</h3>
            <ul className="flex flex-col space-y-2 py-3 justify-center items-center">
              {ingredientList.map((item, index) => (
              <li key={index} className="p-2 w-2/3 rounded-full bg-[#FFDAB9] text-black font-medium shadow-sm">
              {item}
              </li>
              ))}
            </ul>
          </>
        }
      </div>

      {/* Generate Recipe Button */}
      {ingredientList.length > 0 && (
        <Button content="Generate Recipe" onClick={generateRecipe} />
      )}

      {/* Cooking Animation */}
      {isLoading && <CookingAnimation />}

      {/* Display Recipe */}
      {!isLoading && recipe && <Recipe recipe={recipe} />}
    </div>
  );
}

export default Ingredients