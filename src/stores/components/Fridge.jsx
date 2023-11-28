import React from 'react'

import {fridgeData}  from '../data/fridge'

const firstFiveImages = fridgeData.slice(0,5)

const Fridge = () => {
  return (
  <>
  <h2>Refrigerators</h2>
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

export default Fridge
