import React, { useContext } from 'react'
import WishListContext from '../context/WishlistContext';
import BasketContext from '../context/BasketContext';
import './Wishlist.css'
import { BsBasket3Fill, BsFillHeartFill } from 'react-icons/bs';

const Wishlist = () => {
    const { wishList, isInWishList, addToWishList } = useContext(WishListContext);
    const { addToBasket } = useContext(BasketContext);
    return (
        <>
            {wishList.length > 0 ? (
                <div>
                    {wishList.map(item => (
                        <div className="wishlist-card" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="wishlist-body">
                                <h4>{item.name}</h4>
                                <div className="wishlist-price">${item.price}</div>
                                <div className='wishlist-buttons'>
                                    <button style={{ color: isInWishList(item.id) ? "red" : "black" }} onClick={() => addToWishList(item)}>
                                        <BsFillHeartFill />
                                    </button>
                                    <button onClick={() => addToBasket(item)}>
                                        <BsBasket3Fill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Wishlist is Empty</p>
            )}
        </>
    )
}

export default Wishlist