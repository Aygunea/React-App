import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext'
import './Basket.css'

const Basket = () => {
    const { basket, increaseBtn,totalPrice } = useContext(BasketContext)

    return (
        <>
            {basket.length > 0 ? (
                <div id="basket-cards">
                    {basket.map(item => (
                        <div className="basket-card" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="basket-card-body">
                                <h4>{item.name}</h4>
                                <div className="basket-price">${item.price}</div>
                                <div className="count-btns">
                                    <button className="decrease-btn" onClick={() => increaseBtn(item, false)}>-</button>
                                    <button className='card-count'>{item.quantity}</button>
                                    <button className="increase-btn" onClick={() => increaseBtn(item, true)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p className="total-price">Total Price: ${totalPrice} </p>
                </div>
            ) : (
                <p>Basket is Empty</p>
            )}
        </>
    )
}

export default Basket