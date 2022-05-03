import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider({ children }) {
    const value = useState([])

    return (
        <CartContext.Provider value={value} >
            {children}
        </CartContext.Provider>
    )
}