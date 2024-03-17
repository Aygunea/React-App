import React from 'react'
import { useContext } from 'react';
import '../App.css';
import WishListContext from '../context/WishlistContext';
import BasketContext from '../context/BasketContext';
import { BsFillHeartFill } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import img1 from '../images/product1.png';
import img2 from '../images/product2.png';
import img3 from '../images/product3.png';
import img4 from '../images/product4.png';
import img5 from '../images/product5.png';
import img6 from '../images/product6.png';
import img7 from '../images/product7.png';
import img8 from '../images/product8.png';
const productsData = [
    { id: 1, name: "Nike Dunk Low Unlocked By You", price: 79, quantity: 1, image: img1 },
    { id: 2, name: "Nike Dunk Low Unlocked By You", price: 89, quantity: 1, image: img2 },
    { id: 3, name: "Nike Dunk Low Unlocked By You", price: 89, quantity: 1, image: img3 },
    { id: 4, name: "Nike Dunk Low Unlocked By You", price: 99, quantity: 1, image: img4 },
    { id: 5, name: "Nike Dunk Low Unlocked By You", price: 79, quantity: 1, image: img5 },
    { id: 6, name: "Nike Dunk Low Unlocked By You", price: 119, quantity: 1, image: img6 },
    { id: 7, name: "Nike Dunk Low Unlocked By You", price: 59, quantity: 1, image: img7 },
    { id: 8, name: "Nike Dunk Low", price: 119, quantity: 1, image: img8 }
  ]
const Cards = () => {
    const { addToWishList, isInWishList } = useContext(WishListContext);
    const { addToBasket } = useContext(BasketContext);
  
  return (
    <div className="app">
    <ToastContainer />
    <ul className='cards'>
      {productsData && productsData.map((product) => (

        <li className='card' key={product.id}>
          <img src={product.image} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <div className='buttons'>
            <button style={{ color: isInWishList(product.id) ? "red" : "black" }} onClick={() => addToWishList(product)}>
              <BsFillHeartFill />
            </button>
            <button onClick={() => addToBasket(product)}>
              <BsBasket3Fill />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Cards