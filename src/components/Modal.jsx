import React from 'react'
import Button from './Button'

function Modal({foodName,onGenerate}) {
  return (
    <div className='bg-[#faedcd] p-10 m-10 mt-20 rounded-2xl w-150 text-center'>
        <h1 className='text-3xl font-bold'>Ready for the Recipe?</h1>
        <div className="flex flex-row justify-between items-center mt-5 gap-5">
            {
                foodName.length > 0 &&
                <>
                    <p>Generate the recipe for your desired dish</p>
                    <Button 
                    content="Get Recipe"
                    onClick={onGenerate}
                    />
                </>
            }
        </div>
    </div>
  )
}

export default Modal