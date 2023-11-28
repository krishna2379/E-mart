import React from 'react'

import {acData}  from '../data/ac'

const firstFiveImages = acData.slice(0,5)

const Ac = () => {
  return (
 <>
 <h2>Air Conditioners</h2>
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

export default Ac
