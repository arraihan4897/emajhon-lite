import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';


const Shop = () => {
   
    const [products , setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const handleAddToCart=(selectedProduct)=>{
        console.log(selectedProduct);
        let newCart = [];

        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity=1 ;
            newCart = [...cart, selectedProduct]

            }
            else {
                const rest= cart.filter(product => product.id !== selectedProduct.id)
                exist.quantity=exist.quantity+1 ;
                newCart=[...rest, exist];
            }   

        setCart(newCart);
        addToDb(selectedProduct.id);

       
    }

    useEffect(()=>{
          fetch('products.json')
          .then (res => res.json())
         .then (data =>setProducts(data))
           },[])
    useEffect(() =>{
            const storeCart = getStoredCart();
            const savedCart = [];
            for (const id in storeCart) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct){
                    const quantity = storeCart[id];
                    addedProduct.quantity = quantity;
                 savedCart.push(addedProduct);
                }             
            }
            setCart(savedCart);
        },[products])
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
                 <Cart cart={cart}></Cart> 
            </div>
            
       
        </div>
    );
};

export default Shop;