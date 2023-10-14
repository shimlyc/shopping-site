import { useState } from 'react'
import Header2 from './Header2'
import Images2 from './Images2'
import { useEffect } from 'react'

function Cosmetics() {
    const[search,searchItem]=useState(' ')
    const [ response,setResponse] = useState([])
 
    let data=[
      {
        photo:"https://marscosmetics.in/cdn/shop/products/01_2_W_800x.jpg?v=1668075808",
        name:"lipstick"
      },
      {
        photo:"https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/n/e/neve-cosmetics-dessert-a-levres-lipstick-sakura-mochi-4ml.jpg",
        name:"lipstick" 
      },
      {
        photo:"https://images-static.nykaa.com/media/catalog/product/c/7/c7cddc78904207500672_9.jpg?tr=w-500,pr-true",
        name :"lipstick"  
      },
      {
        photo:"https://m.media-amazon.com/images/I/511KmzoVGQL.jpg",
        name:"moisturizer"  
      },
      {
        photo:"https://images.mamaearth.in/catalog/product/h/o/honey-malai-oil-free-face-moisturizer_1.jpg",
        name:"moisturizer"  
      },
      {
        photo:"https://images.thedermaco.com/promotional/faq-image/Ceramide%20%2B%20HA%20Intense%20Moisturizer.jpg",
        name:"moisturizer"  
      },
      {
        photo:"https://img.tatacliq.com/images/i13/320Wx357H/MP000000018756206_320Wx357H_202309051910272.jpeg",
        name:"moiturizer"  
      },
      {
        photo:"https://cdn.shopify.com/s/files/1/0906/2558/files/EyeWarnedYouSo_DoubleMatteEyeliner-1080x10801.jpg?v=1685635241",
        name:"eyeliner"  
      },
      {
        photo:"https://www.lakmeindia.com/cdn/shop/products/24894_H--8901030814891.jpg?v=1606366615",
        name:"eyeliner"  
      },
      {
        photo:"https://m.media-amazon.com/images/I/51mpHWYUm-L.jpg",
        name:"blush"  
      },
      {
        photo :"https://www.lakmeindia.com/cdn/shop/files/29618_H-8901030964527_600x600_crop_center.jpg?v=1686129385",
        name:"foundation"  
      },
      {
        photo:"https://m.media-amazon.com/images/I/81axYhYWI1L._AC_SY200_QL15_.jpg",
        name:"blush"  
      },
      {
        photo:"https://images-static.nykaa.com/media/catalog/product/0/5/05408abINSIG00000369_001.jpg",
        name:"foundation"  
      },
      {
        photo:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19821444/2023/8/31/74b0f0f8-71e0-4685-a78c-24caebb5f9901693478174478-Charmacy-Milano-Ultra-Shift-Seal-24Hour-Wear-CMC-Matte-Found-1.jpg",
        name:"foundation"  
      },
      {
        photo:"https://www.bigbasket.com/media/uploads/p/l/40241275_1-miss-rose-24-color-glitter-eyeshadow-palette-highly-pigmented.jpg",
        name:"eyeshadow"  
      },
      {
        photo:"https://sunshinebeautycentre.com/wp-content/uploads/2019/11/sugar-cosmetics-blend-the-rules-eyeshadow-palette-01-flawless-warm-neutrals-12758874390611_540x.jpg",
        name:"eyeshadow"  
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
  
      <Header2 />
      <input type="text" placeholder="search here...." onChange={handleClick} /><i class="fa-solid fa-magnifying-glass"></i>
      <div className='div3'>
        {
           console.log(response)
        }

      {
        response.map(({name,photo})=>{
          return(
            <>
<Images2 image={photo} title={name}/>
</>
          )})
        
      }
      </div>
    </>
  )
}

export default Cosmetics
