import React from 'react'

export default function FilterByPrice({selectPrice, onChange}) {
      
    const price = ['tous','plus cher', 'moins cher']

  return (
      <select value={selectPrice} onChange={(e) => onChange(e.target.value)}>
     {price.map((prix) => <option key={prix} value={prix}>{prix}</option>)}
   </select>
  )
}
