export const addItem = ({ stock, current })=> {
    if(current === stock || stock === 0) return { stock, current };
    
    return {
        stock,
        current: current + 1
    }
};

export const removeItem = ({ current, ...otherProps }) => {
    if(current === 0) return { current, ...otherProps };
    
    return {
        ...otherProps,
        current: current - 1 
    }
};