import React from 'react'
import {tvData}  from '../data/tv'

const firstFiveImages = tvData.slice(0,5)

const Tv = () => {
  return (
    <>
    <h2>Television</h2>
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

export default Tv
