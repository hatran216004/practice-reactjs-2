import { createContext, useState } from 'react';
import all_product from '../Components/assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmnout = () => {
        let totalAmnout = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmnout += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmnout;
    };

    const getQuantityItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmnout, getQuantityItems };
    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
