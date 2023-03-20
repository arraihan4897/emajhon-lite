import React from 'react';
import './Product.css'

const Product = (props) => {
    const {handleAddToCart}= props;
    const {name,price,category,img,ratingsCount}=props.product;

 
    return (
        <div className='proContainer'>
           <img src={img} alt="" />
           <div className="productInfo">
           <p className='text'>{name}</p>
           <h1>Price: ${price}</h1>
           <p>Category : {category}</p>
           <p>Ratings : {ratingsCount}</p>
         
           </div>
             <button onClick={()=>props.handleAddToCart(props.product)}  >Add to Cart</button>
        </div>
    );
};

export default Product;