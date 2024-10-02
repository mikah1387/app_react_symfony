import React, { useState } from 'react'
import Post from './Post'
import FilterByCaty from './FilterByCaty';
import FilterByPrice from './FilterByPrice';



export default function MyApp({posts}) {

   const [select, setSelect] = useState("all");
   const [selectPrice, setSelectPrice] = useState("tous");
   const filterpost = posts.filter((post) => post.category === select || select ==="all");
    console.log(filterpost);
    
    const filterprice = selectPrice === 'moins cher' || selectPrice==="tous" ? filterpost.sort ((a, b) => a.price - b.price) : filterpost.sort ((a, b) => b.price - a.price);
  return (
    <div>
      <div>
        <label htmlFor="select"> filtrer :</label>
     <FilterByCaty select={select} onChange={setSelect}/>
     <FilterByPrice selectPrice={selectPrice} onChange={setSelectPrice}/>
     </div>
    <div className='posts'>
     {filterpost.map((post) => <Post post={post}/>
       
     )}
     </div>
    </div>
  )
}
