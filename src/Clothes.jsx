import { useState } from 'react'
import Header from './Header'
import Images from './Images'
import { useEffect } from 'react'

function Clothes() {
    const[search,searchItem]=useState(' ')
    const [ response,setResponse] = useState([])
 let data=[
  {
    photo:"https://i.pinimg.com/564x/85/e7/a4/85e7a493321e24d0868fee089fcd2f14.jpg",
    name:"top & skirt"
  },
  {
    photo:"https://i.pinimg.com/564x/bd/43/f2/bd43f2cbaf49e708cbb8cbb882cb70fb.jpg",
    name:" top & Trousers" 
  },
  {
    photo:"https://i.pinimg.com/564x/d1/e1/28/d1e1285b2bbe8edd7a8db1c5204c43e7.jpg",
    name :"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/c2/b4/95/c2b495b3c08726de7fc71d4de9a2d44f.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/ab/8a/24/ab8a245fab37fe279c13ce8879de612e.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/f8/c4/91/f8c4916ebc94cf845952186bf9fe3465.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/66/03/00/66030043c47a8b0c47563316c6bfd83a.jpg",
    name:"top & skirt"  
  },
  {
    photo:"https://i.pinimg.com/564x/61/08/3a/61083a993d5b92c0c1ba3161ed87bce5.jpg",
    name:"top & trousers"  
  },
  {
    photo:"https://i.pinimg.com/564x/7f/3d/59/7f3d59457ad0e75c4ade6d766cfd0b6d.jpg",
    name:"top & skirt"  
  },
  {
    photo:"https://i.pinimg.com/564x/05/4b/19/054b193dce5019eb990f462c348511cd.jpg",
    name:"top & skirt"  
  },
  {
    photo :"https://i.pinimg.com/564x/2a/3f/29/2a3f297da099f8edda19b3d79b3deedb.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/fb/eb/1c/fbeb1c7a20092c7606a62a8700064e5b.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/7c/db/26/7cdb26e740bbc68368b33e33d1a3224e.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/7c/26/b1/7c26b124ec6de021fe209b3cf242d266.jpg",
    name:"frock dress"  
  },
  {
    photo:"https://i.pinimg.com/564x/ed/c0/19/edc019fc32b539e7e14d2d210db197fe.jpg",
    name:"top & skirt"  
  },
  {
    photo:"https://i.pinimg.com/736x/51/c9/18/51c918bbb1e2451b8c9dedc1cdb469e5.jpg",
    name:"top & skirt"  
  },
  
 ]
 const handleClick=(e)=>{
    const search1=e.target.value;
    console.log(search1);
    searchItem(search1)
  
    let result =  data.filter((data)=>{
      if( data.name ===search1)
        return true
  })

  setResponse(result)
  console.log(result,"result");

  
  }  
 
  useEffect (()=>{
      setResponse(data)},[]
      )
 
  return (
    <>
  
      <Header />
      <input type="text" placeholder="search here...." onChange={handleClick} />
      <div className='div3'>
{
  console.log(response)
}
      {
        response.map(({name,photo})=>{
          return(
            <>
<Images image={photo} title={name}/>
</>
          )})
        
      }
      </div>
    </>
  )
}

export default Clothes
