import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [product, setProduct]   =  useState(firstTen);
    const [cart , setCart] = useState([]);

    const handleAddCart = (product) => {
        const newCart = [ ...cart , product ];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        product.map(p => <Product addCart={handleAddCart} product={p}></Product>)
                    }
            </div>  
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>              
            
        </div>
    );
};

export default Shop;