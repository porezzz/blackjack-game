import React from 'react'
const Card = (img) => {
  return (
    <div className='bg-white w-[200px] h-[250px] text-black rounded-md'>
        <img src={img} alt='card img' className='absolute align-middle'/>
    </div>
  )
}

export default Card