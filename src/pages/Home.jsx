import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function Home() {
  return (
    <div>
        <h1 className='text-center mt-10 font-bold text-5xl font-[DM Serif Text]'>Where Every Byte Turns into a Delight!</h1>
        <div className=' flex flex-wrap justify-evenly items-center mt-20'>
            <Link to='/food-name'>
                <Card 
                    title='Recipe from Food'
                    image='https://homefoodi.com/wp-content/uploads/2023/02/flat-lay-indian-food-frame.png'
                    description='Craving something delicious? Just type in your favorite dish, and we’ll serve you the perfect recipe in seconds! No more guessing—only great cooking awaits! 🍕🍜'
                    />
            </Link>
            <Link to='/ingredients'>
                <Card 
                    title='Recipe from Ingredients'
                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/800px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
                    description='Got random ingredients but no clue what to cook? Enter what’s in your kitchen, and we’ll whip up the best recipe for you! No food wasted—only tasty surprises! 🥑🔥'
                    />
            </Link>
            <Link to='/ingredients'>
                <Card 
                    title='Recipe from Image'
                    image='https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg'
                    description='Got a random food item but not sure what it is? Snap a picture, and we’ll identify it and suggest the perfect recipe! No more guessing—just delicious discoveries! 📸🍽️'
                    />
            </Link>
        </div>
    </div>
  )
}

export default Home