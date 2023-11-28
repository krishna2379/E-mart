import React from 'react'

import {mobileData}  from '../data/mobiles'

const firstFiveImages = mobileData.slice(0,5)

const Mobiles = () => {
  return (
    <>
    <h2>Mobiles</h2>
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

export default Mobiles
 