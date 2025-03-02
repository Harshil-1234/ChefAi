import React from 'react'

function Button({content,onClick}) {
  return (
    <button 
        className="bg-orange-400 text-white rounded-full w-40 px-2 py-2 shadow-lg hover:opacity-90 hover:cursor-pointer transition"
        onClick={onClick}
    >
      {content}
    </button>
  )
}

export default Button