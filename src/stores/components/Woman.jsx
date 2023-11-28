import React from 'react'
import {womanData} from '../data/woman'
const firstFiveImages=womanData.slice(0,5)
const Woman = () => {
  return (
 <>
 <h2>Womens Wear</h2>
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

export default Woman
