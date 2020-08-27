import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,p) => total + p.price,0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 4.99;
    }

    const tax = total / 10;

    const formatPrice = (num) =>{
        num = parseFloat(num).toFixed(2)
        return num;
    }

    return (
        <div>
            <h3>Order Summery</h3>
            <h5>Ordered Item : {cart.length}</h5>
            <h5>Product Price : {formatPrice(total)}</h5>
            <h5>Shipping Cost : {formatPrice(shipping)}</h5>
            <h5>Tax  Cost : {formatPrice(tax)}</h5>
            <h3>Total Price : {formatPrice(total + shipping + tax)}</h3>
        </div>
    );
};

export default Cart;