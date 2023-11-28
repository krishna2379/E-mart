import React, { useState } from 'react'
import { booksData } from '../data/book'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const BooksPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
    booksData : booksData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
 
{booksData.map((phone)=>{
    return(
        <div className='pro-input'>
            
        </div>
    )
})}
 

<div className='bpageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/books/${item.id}`}>
                <div className="bookImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.title} 
                </div>
            </div>
        )
    })}

 </div>
 
</>
  )
}

export default BooksPage