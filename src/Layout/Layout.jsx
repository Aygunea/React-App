import { Outlet, Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import './Layout.css'
import { useContext } from "react";
import BasketContext from "../context/BasketContext";

const Layout = () => {
    const { totalCount } = useContext(BasketContext)
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">
                            <CiHeart />
                        </Link>
                    </li>
                    <li>
                        <Link to="/basket">
                            <CiShoppingCart />
                            <span>
                               {totalCount}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;