import React from 'react'

export default function FilterByCaty({select,onChange}) {
    const catys = ["all", "fashion", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
   <select value={select} onChange={(e) => onChange(e.target.value)}>
     {catys.map((caty) => <option key={caty} value={caty}>{caty}</option>)}
   </select>
  )
}
