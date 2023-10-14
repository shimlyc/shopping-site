import { useState } from 'react'
import Header3 from './Header3'
import Images3 from './Images3'
import { useEffect } from 'react'

function Accessories() {
    const[search,searchItem]=useState(' ')
    const [ response,setResponse] = useState([])
 let data=[
  {
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjhh0NRRXj1Q-OGrY8ReD_-c38koi7DvMXh4OFqJH4VDtLCaFAF90shpQcBlM5vIrkso&usqp=CAU",
    name:"sunglass"
  },
  {
    photo:"https://image.nihaojewelry.com/fit-in/780x780/filters:quality(80)/filters:format(webp)/product/2022/2/25/1497030510139019264/Fashion_Round_Metal_Fashion_Sunglasses_Female.jpg",
    name:"sunglass" 
  },
  {
    photo:"https://m.media-amazon.com/images/I/71Vpj1dqjyS._AC_UF894,1000_QL80_.jpg",
    name :"hat"  
  },
  {
    photo:"https://m.media-amazon.com/images/I/51+o1ClftsL._UX679_.jpg",
    name:"hat"  
  },
  {
    photo:"https://www.happygiftmart.com/image/cache/catalog/18K%20BUTTERFLY%20ROSE%20PEND/RoseGold-2-630x552.jpg",
    name:"jewellery"  
  },
  {
    photo:"https://m.media-amazon.com/images/I/61SDkfiuSoL._AC_UY300_.jpg",
    name:"jewellery"  
  },
  {
    photo:"https://lerevebeauty.it/wp-content/uploads/2021/11/lerevekit-18.jpg",
    name:"hair accessories"  
  },
  {
    photo:"https://img.kwcdn.com/product/1e19d46509a/69c520f5-e123-4ca9-b403-dfe7dfdeb154_800x800.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/1300/q/80/format/webp",
    name:"hair accessories"  
  },
  {
    photo:"https://cdn.shopify.com/s/files/1/0477/5025/0652/products/300924585_1_540x.jpg?v=1678113882",
    name:"hair accessories"  
  },
  {
    photo:"https://5.imimg.com/data5/SELLER/Default/2022/8/RV/DJ/CQ/58086586/versace-ladies-watch.jpeg",
    name:"watch"  
  },
  {
    photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8d8ErC6ICIv-94tqZoMhjt38q8Ft7eGCfkg&usqp=CAU",
    name:"watch"  
  },
  {
    photo:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2278228/2022/4/19/2451411c-8346-4b8e-b228-e60351d536161650342959173-DressBerry-Women-Mauve-Analogue-Watch-1341650342959089-7.jpg",
    name:"watch"  
  },
  {
    photo:"https://m.media-amazon.com/images/I/5159txtY55L._AC_UY1000_.jpg",
    name:"watch"  
  },
  {
    photo:"https://cdn.fcglcdn.com/brainbees/images/products/280x338/10194475a.webp",
    name:"hair accessories"  
  },
  {
    photo:"https://m.media-amazon.com/images/I/41dFq2Y3ScL._UX679_.jpg",
    name:"sunglasses"  
  },
  {
    photo:"https://img.ltwebstatic.com/images3_pi/2023/02/21/167697157934918b0df3df1f307e07cdf6039beb4d_thumbnail_405x552.jpg",
    name:"hat"  
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
  
      <Header3 />
      <input type="text" placeholder="search here...." onChange={handleClick} />
      <div className='div3'>
{
  console.log(response)
}
      {
        response.map(({name,photo})=>{
          return(
            <>
<Images3 image={photo} title={name}/>
</>
          )})
        
      }
      </div>
    </>
  )
}

export default Accessories
