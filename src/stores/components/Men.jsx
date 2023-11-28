import React from 'react'

import {menData}  from '../data/men'
const firstFiveImages = menData.slice(0,5)


const Men = () => {
  return (
   <>
   <h2>Men Fashion</h2>
   <div className='proSection'>
    {
        firstFiveImages.map((item)=>{
          return(
            <div className='imageBox'>  
                <img className='proImage' src={item.image} alt=""/>
            </div>
          )
        })
    }
</div>
   </>
  )
}

export default Men
