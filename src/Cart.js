import React from "react";
import CartItem from "./CartItem";
const Cart=(props)=>{
        const {products,onIncQty,onDecQty,onDelete}=props;
        return(
            <div className="cart">
               {
                products.map((product)=>{
                    return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncQty={onIncQty}
                    onDecQty={onDecQty}
                    onDelete={onDelete}
                    />;
                })
               }
                {/* <CartItem/>
                <CartItem/> */}
            </div>
        );
    }
export default Cart;