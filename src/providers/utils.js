export const addItem = (items, item)=> {
    if(item.qty === item.stock || item.stock === 0) return items;
    return items.map(e => (e.id === item.id ?
        { ...e, qty: e.qty + 1 }
        : e
    ));
};

export const removeItem = (items, item) => {
    if(item.qty === 1) return clearItem(items, item);
    return items.map(e => (e.id === item.id ?
        { ...e, qty: e.qty - 1 }
        : e
    ));
};

export const clearItem = (items, item) => items.filter(({ id }) => id !== item.id);

export const reduceCart = cartItems => {
    return cartItems.reduce((acc, curr) => {
        let x = acc.find(({id}) => id === curr.id);
        let y = acc.filter(({id}) => id !== curr.id);
        if(x) return [...y, {...curr, qty: curr.qty + x.qty}];
        return [...acc, curr];
    },[]);
};

export const getCartTotal = cartItems => (
    cartItems.reduce((acc, curr)=> acc + curr.price * curr.qty, 0)
);

export const getTotalItems = cartItems => (
    cartItems.reduce((acc, curr)=> acc + curr.qty, 0)
);