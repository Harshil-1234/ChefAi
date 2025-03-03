import React from 'react'

function CookingAnimation() {
  return (
    <div className="flex flex-col items-center mt-5">
        <div className="animate-bounce text-6xl">🍳</div>
        <p className="mt-3 text-lg text-gray-700">Cooking your recipe...</p>
    </div>
  )
}

export default CookingAnimation