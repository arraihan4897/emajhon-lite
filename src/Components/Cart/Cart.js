import { faToiletPortable } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cart = ({cart}) => {
        let total = 0;
         let shipping = 0;
         let quantity = 0;


    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total+ product.price *product.quantity;
        shipping=shipping+product.shipping;
        
    
    };
   const tax=parseFloat((total*.01).toFixed(2));
 
   const GrandTotal= total+shipping+tax;

    return (
        <div>
             <h2>Order summery</h2><hr />
   
                <div className="Cal">
                    <h5>Total Price:$ <span>{total}</span></h5> 
                    <h5>Quantity:$ <span>{quantity}</span></h5> 
                    <h5>Shipping Charges: $ <span>{shipping}</span></h5>
                    <h5>Tax: $<span>{tax}</span></h5>    
                    <h4>GrandTotal:{GrandTotal}</h4>     
                </div>


                <button className='btn'>Clear Cart </button>
                <button className='r-btn'>Review Order </button>
            </div>

    );
};

export default Cart;