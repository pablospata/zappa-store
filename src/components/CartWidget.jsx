import React from 'react'

const CartWidget = () => {
    return (
        <div className='carrito'>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <p className='carrito-count'>3</p>
        </div>
    )
}

export default CartWidget