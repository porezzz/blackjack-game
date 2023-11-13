import React from 'react'
const Card = (value) => {
  return (
    <div className='bg-white w-[200px] h-[250px] text-black rounded-md m-6 flex items-center justify-center text-[40px]'>
        {value}
    </div>
  )
}

export default Card