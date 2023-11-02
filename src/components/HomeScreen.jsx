import React from 'react'
import img from '../assets/pobrane-removebg-preview.png'
import img2 from '../assets/istockphoto-153493845-612x612-removebg-preview.png'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className="flex align-middle justify-center h-screen w-screen bg-black text-white select-none">
      <div className="flex flex-col justify-center items-center h-[85%]">
        <img src={img} alt='img' className='absolute left-[1120px] w-[150px] top-[220px] brightness-[30%]'/>
        <img src={img2} alt='img' className='absolute left-[620px] w-[190px] top-[190px] brightness-[30%]'/>
        <h1 className="text-[90px] mb-[100px] z-[99] shadow-black drop-shadow-sm brightness-[110%]">Blackjack</h1>
        <Link to={"/game"}><button className="bg-white text-black rounded-xl w-[360px] h-[100px] text-[40px] hover:border-[5px] hover:border-[red]">Start a New Game!</button></Link>
      </div>
    </div>
  )
}

export default HomeScreen