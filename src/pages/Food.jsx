import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import {getRecipeFromDishName} from '../utils/ai'
import Recipe from '../components/Recipe'
import CookingAnimation from '../components/CookingAnimation'

function Food() {
  const [foodName, setFoodName] = useState('')
  const [recipe, setRecipe] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const generateRecipe = async () => {
    setIsLoading(true); // Start animation
    const recipe = await getRecipeFromDishName(foodName);
    setRecipe(recipe);
    setIsLoading(false); // Stop animation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateRecipe();
  };

  return (
    <div className="flex flex-col items-center justify-center">
    <form 
      className="p-10 flex flex-col items-center justify-center gap-5" 
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none w-96 py-2 px-4 bg-[#FFE5C4] shadow-md rounded-lg placeholder-gray-600"
        placeholder="Enter food name here"
        value={foodName}
        onChange={(e) => (setFoodName(e.target.value))}
      />
      {
        foodName.length > 0 
        &&
        <Button 
          content='Generate Recipe'
        />
      }
    </form>

    {/* Cooking Animation */}
      { 
        isLoading && 
        <CookingAnimation />
      }

      {/* Display Recipe */}
      {!isLoading && recipe && <Recipe recipe={recipe} />}


    </div>

  )
}

export default Food