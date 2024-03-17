import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    useEffect(() => {
        const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasket(savedBasket)
    }, [])

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
        const count = basket.reduce((total, item) => total + item.quantity, 0);
        setTotalCount(count);
    }, [basket]);

    const addToBasket = (product) => {
        const existingItemIndex = basket.findIndex(
            (basketItem) => basketItem.id === product.id
        );
        if (existingItemIndex !== -1) {
            basket[existingItemIndex].quantity += 1;
            localStorage.setItem("basket", JSON.stringify(basket))
            handleAddToBasket(product.name)
        } else {
            const updatedBasket = [...basket, product];
            setBasket(updatedBasket)
            localStorage.setItem("basket", JSON.stringify(updatedBasket))
            handleAddToBasket(product.name)
        }
    }
    const handleAddToBasket = (name) => {
        toast.success(`${name} add to Basket!`, {
            position: "top-center",
            autoClose: 1000
        });
    }
    const increaseBtn = (item, isIncrease) => {
        const updatedBasket = basket.map(basketItem => {
            if (basketItem.id === item.id) {
                return {
                    ...basketItem,
                    quantity: isIncrease ? basketItem.quantity + 1 : basketItem.quantity - 1
                };
            }
            return basketItem;
        }).filter(basketItem => basketItem.quantity > 0);
        setBasket(updatedBasket);
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
    }
    const totalPrice = basket.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <BasketContext.Provider value={{ basket, addToBasket, increaseBtn, totalCount, totalPrice }}>
            {children}
        </BasketContext.Provider>
    )

}


export default BasketContext