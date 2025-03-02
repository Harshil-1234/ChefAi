import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

function Food() {
  const [foodName, setFoodName] = useState('')

  const generateRecipe = async () => {
    console.log(foodName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateRecipe();
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

  </div>

  )
}

export default Food