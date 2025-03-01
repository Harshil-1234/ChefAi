import React from 'react'

function Card({title,image,description}) {
  return (
    <div>
        <div className='w-96 h-96 bg-white shadow-md rounded-lg overflow-hidden'>
            <img src={image} alt='' className='w-full h-52 object-cover'/>
            <div className='p-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-gray-600 mt-4'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card