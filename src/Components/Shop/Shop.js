import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'


const Shop = () => {
    const handleAddToCart=(product)=>{
        console.log(product)
    }
   
    const [products , setProducts]=useState([]);
    useEffect(()=>{
          fetch('products.json')
          .then (res => res.json())
         .then (data =>setProducts(data))
           },[])
    return (
        <div className='Cart-container'>
            <div className="productContainer">
                {
                    products.map(product=><Product 
                        handleAddToCart={handleAddToCart}
                    key={product.id}
                    product={product}
                    ></Product>)
                }
               
            </div>

            <div className="summeryContainer">
              <h2>Order summery</h2><hr />
                <div className="Cal">

                <h5>Total Price:$ <span>00</span></h5> 
               <h5>Total Shipping Charges: $ <span>00</span></h5>
                <h5>Tax: $<span>00</span></h5>         
                </div>


                <button className='btn'>Clear Cart </button>
                <button className='btn'>Review Order </button>
            </div>
            
        </div>
    );
};

export default Shop;