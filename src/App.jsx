import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footwear from './Footwear'
import Clothes from './Clothes'
import Cosmetics from './Cosmetics'
import Accessories from './Accessories'

function App(){
  const[clothes,setClothes]=useState(false)
  const[footwear,setFootwear]=useState(false)
  const[cosmetics,setCosmetics]=useState(false)
  const[accessories,setaccessories]=useState(false)
  const[head,heading]=useState(true)
  const[img,image]=useState(true)

  const handle1 =  ()=>{
    setClothes(true)
    setFootwear(false)
    heading(false)
    image(false)
    setCosmetics(false)
    setaccessories(false)
  }  
  const handle2 =  ()=>{
    setClothes(false)
    setFootwear(true)
    heading(false)
    image(false)
    setCosmetics(false)
    setaccessories(false)
  }
  const handle3=  ()=>{
    setClothes(false)
    setFootwear(false)
    heading(false)
    image(false)
    setCosmetics(true)
    setaccessories(false)
  }
  const handle4 =  ()=>{
    setClothes(false)
    setFootwear(false)
    heading(false)
    image(false)
    setCosmetics(false)
    setaccessories(true)
  }
 


  
  return(
    <>
    {img && <img className='img' src="https://media4.giphy.com/media/7ozDVQJe3z5gGge78M/giphy.gif?cid=6c09b952x9t55nq15l3wmykpol3w74bsln4rcqaw8vvmo1yz&ep=v1_gifs_search&rid=giphy.gif&ct=s" alt="" />}
  {head && <h1 className='head'>Endless choices, endless joy....</h1>}
    <button className='button1' onClick={handle1}>CLOTHES</button>
    <button className='button2' onClick={handle2}>FOOTWEAR</button>
    <button className='button2' onClick={handle3}>COSMETICS</button>
    <button className='button2' onClick={handle4}>ACCESSORIES</button>
   

     {
      clothes && <Clothes/>
     }
     {
      footwear && <Footwear/>
     }
     {
      cosmetics && <Cosmetics/>
     }
     {
      accessories && <Accessories/>
     }
     

    </>
  )
}

export default App
