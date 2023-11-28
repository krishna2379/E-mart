import React from "react"; 
import { tvData } from "../stores/data/tv";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { useCart } from "../stores/context/CartContext";


const TvSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = tvData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="tvind-section">
        <div className="tvind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default TvSingle;