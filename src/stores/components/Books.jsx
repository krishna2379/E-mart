import React from 'react'

import {booksData}  from '../data/book'

const firstFiveImages = booksData.slice(0,5)


const Books = () => {
  return (
    <>
    <h2>Books</h2>
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

export default Books
