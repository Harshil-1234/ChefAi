import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button';
import { getRecipeFromImage } from '../utils/ai';
import Recipe from '../components/Recipe';
import CookingAnimation from '../components/CookingAnimation';

const FoodImage = ({ onImageSubmit }) => {
  const [image, setImage] = useState(null);
  const [imageUrl,setImageUrl] = useState(null);
  const [recipe,setRecipe] = useState('')
  const [isLoading,setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageUrl(imageUrl);
        setImage(file);
        setRecipe('')
    }
  };

    const generateRecipe = async () => {
      setIsLoading(true); // Start animation
      const recipe = await getRecipeFromImage(image);
      setRecipe(recipe);
      setIsLoading(false); // Stop animation
    };

  const handleSubmit = () => {
    if (image) {
      generateRecipe(image)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-black mt-8 mb-8">Upload or Capture Image</h1>

      {/* Upload and Capture Buttons */}
      <div className="flex gap-6">
        <label className="cursor-pointer bg-orange-400 text-white rounded-full w-40 px-2 py-2 shadow-lg hover:opacity-90 transition text-center">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Display Captured Image */}
      {image && (
        <div className="mt-8">
          <img src={imageUrl} alt="Captured" className="rounded-lg shadow-lg w-90 h-80 mb-8" />
        </div>
      )}

      {/* Submit Image Button */}
      {image && (
        <Button onClick={handleSubmit} content="Submit Image" />
      )}

      {/* Cooking Animation */}
      {isLoading && <CookingAnimation />}

      {/* Display Recipe */}
      {!isLoading && recipe && <Recipe recipe={recipe} />}
    </div>
  );
};

export default FoodImage;
