import React from 'react'
import {kitchenData}  from '../data/kitchen'

const firstFiveImages = kitchenData.slice(0,5)
const Kitchen = () => {
  return (
    <>
    <h2>Kitchen</h2>
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

export default Kitchen
