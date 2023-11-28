import React from 'react'
import {furnitureData}  from '../data/furniture'

const firstFiveImages = furnitureData.slice(0,5)

const Furniture = () => {
  return (
    <>
    <h2>Furniture</h2>
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

export default Furniture
