import React from 'react'
import './Products.css'
export default function Products({img , color , text}) {
  return (
      <div className='prdcts'>
          <img src={img} alt='prdct' />
          <p style={{ 'backgroundColor': `${color}` }}>{text}</p>
    </div>
  )
}
