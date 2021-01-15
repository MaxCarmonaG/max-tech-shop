import { useState, useEffect, createContext } from 'react';

import { CATEGORY_DATA } from './shop.data';
import { addItem, removeItem, clearItem, reduceCart, getCartTotal, getTotalItems } from './utils';
export const StoreContext = createContext({
    data: [],
    display: false,
    toggleDisplay: ()=>{},
    cartItems: [],
    itemToAdd: {},
    addToCart: ()=>{},
    add: ()=>{},
    remove: ()=>{},
    clear: ()=>{},
    cartTotal: 0,
    totalItems: 0     
});

const StoreProvider = ({ children }) => {
    const [display, setDisplay] = useState(false);
    const toggleDisplay = ()=> setDisplay(!display);
    
    const [data, setData] = useState([]);
    
    /*const getData = new Promise((resolve, reject) => {
        if(CATEGORY_DATA.length){
            setTimeout(() => resolve(CATEGORY_DATA),2000);
            return;
        } else {
            reject('No data to display');
            return;
        };
    });*/

    useEffect(()=>{
        setData(CATEGORY_DATA);
        // eslint-disable-next-line
    },[]);
    
    const [cartItems, setCartItems] = useState([]);
    const addToCart = item => setCartItems(reduceCart([...cartItems, item]));

    const [cartTotal, setCartTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(()=>{
        setCartTotal(getCartTotal(cartItems));
        setTotalItems(getTotalItems(cartItems));
    }, [cartItems]);
    
    const add = item => setCartItems(addItem(cartItems, item));
    const remove = item => setCartItems(removeItem(cartItems, item));
    const clear = item => setCartItems(clearItem(cartItems, item));

    return (
        <StoreContext.Provider
            value={{
                data,
                display,
                toggleDisplay,
                cartItems,
                addToCart,
                add,
                remove,
                clear,
                cartTotal,
                totalItems
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;