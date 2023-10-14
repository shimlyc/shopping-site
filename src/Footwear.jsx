import { useState } from 'react'
import Header1 from './Header1'
import Images1 from './Images1'
import { useEffect } from 'react'

function Footwear() {
    const[search,searchItem]=useState(' ')
    const [ response,setResponse] = useState([])
 
    let data=[
      {
        photo:"https://5.imimg.com/data5/SELLER/Default/2023/3/292961893/MD/WL/FO/182365761/women-casual-shallow-mouth-shoe-pointed-toe-shoe-working-flat-shoes-500x500.jpg",
        name:"fancy shoe"
      },
      {
        photo:"https://zouk.co.in/cdn/shop/products/1_5cfa436d-e685-4ef2-8358-8e7d544cd226.jpg?v=1655494513&width=1080",
        name:"fancy shoe" 
      },
      {
        photo:"https://nawanfashion.com/wp-content/uploads/2023/01/Servis-Ladies-Shoes-4.jpg",
        name :"fancy shoe"  
      },
      {
        photo:"https://i.pinimg.com/736x/00/a3/25/00a325f38b87557ad71cb40945c6f543.jpg",
        name:"casual shoe"  
      },
      {
        photo:"https://images.meesho.com/images/products/88390042/fylmn_512.webp",
        name:"casual shoe"  
      },
      {
        photo:"https://rukminim1.flixcart.com/image/850/1000/xif0q/shoe/7/q/t/4-m-all-sport-ladies-4-mozafia-navy-original-imagpb3qeaw2pbrt.jpeg?q=90",
        name:"casual shoe"  
      },
      {
        photo:"https://www.availeverything.com/public/uploads/all/QvsZLhe8wohGk9u8cKFtMymOG9I8t0ubDPxuCK7F.jpg",
        name:"chappal"  
      },
      {
        photo:"https://www.jiomart.com/images/product/original/rv82kne8jh/shoebration-gold-spring-women-chappal-for-girls-women-product-images-rv82kne8jh-0-202210110641.jpg?im=Resize=(1000,1000)",
        name:"chappal"  
      },
      {
        photo:"https://zouk.co.in/cdn/shop/products/Thumbnail3.jpg?v=1663417909&width=772",
        name:"chappal"  
      },
      {
        photo:"https://availeverything.com/public/uploads/all/lOihhJuGfUpVMW1v95hZdMChp0wpK80mhrWAVL51.jpg",
        name:"chappal"  
      },
      {
        photo :"https://static-01.daraz.pk/p/45769cdced0cf39e82c26e60a9f29bba.jpg_750x400.jpg_.webp",
        name:"fancy shoe"  
      },
      {
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnUnB-ooZ3h17FL_Junvcd6N5kRTt9Xv6-W_StrbMEbuUIiukYalOouPLUkjjR9TfQtw&usqp=CAU",
        name:"chappal"  
      },
      {
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17mJs8mhtkTyYfHLMEnmq2REoARan01LXijG9FZ_cMEkmtQBW3D2jZ_-QLZornspiJkE&usqp=CAU",
        name:"casual shoe"  
      },
      {
        photo:"https://canary.contestimg.wish.com/api/webimage/5e5cae051b7b5378597959af-large.jpg?cache_buster=6e176ced82678c276c014acd363d6891",
        name:"casual shoe"  
      },
      {
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGqYC1jkFlAKZX1Q0upMfVDvGRTdayeFXejqumSBYNuL5maDTzNPZvSe6M72UTrlnAB8&usqp=CAU",
        name:"fancy shoe"  
      },
      {
        photo:"https://images.meesho.com/images/products/203116740/8wydv_512.webp",
        name:"chappal"  
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
  
      <Header1 />
      <input type="text" placeholder="search here...." onChange={handleClick} /><i class="fa-solid fa-magnifying-glass"></i>
      <div className='div3'>
      {
           console.log(response)
        }

      {
        response.map(({name,photo})=>{
          return(
            <>
<Images1 image={photo} title={name}/>
</>
          )})
        
      }
      </div>
    </>
  )
}

export default Footwear
