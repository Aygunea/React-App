import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const isInWishList = (productId) => wishList.some((item) => item.id == productId)
    useEffect(() => {
        const savedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
        setWishList(savedWishList)
    }, [])

    const addToWishList = (product) => {
        if (isInWishList(product.id)) {
            let updatedWishList = wishList.filter(item => item.id !== product.id);
            setWishList(updatedWishList)
            localStorage.setItem("wishList", JSON.stringify(updatedWishList))
            handleRemoveFromWishlist(product.name)
        } else {
            const updatedWishList = [...wishList, product];
            setWishList(updatedWishList)
            localStorage.setItem("wishList", JSON.stringify(updatedWishList))
            handleAddToWishlist(product.name)
        }
    }
    const handleAddToWishlist = (name) => {
        toast.success(`${name} add to Wishlist!`, {
            position: "top-center",
            autoClose: 1000
        });
    }
    const handleRemoveFromWishlist = (name) => {
        toast.success(`${name} Remove from Wishlist!`, {
            position: "top-center",
            autoClose: 1000
        });
    }

    return (
        <WishListContext.Provider value={{ wishList, addToWishList,isInWishList }}>
            {children}
        </WishListContext.Provider>
    )

}


export default WishListContext