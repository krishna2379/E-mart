import React from 'react'

import {speakerData}  from '../data/speaker'

const firstFiveImages = speakerData.slice(0,5)


const Speakers = () => {  
  return (
   <>
   <h2>Speakers</h2>
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

export default Speakers
