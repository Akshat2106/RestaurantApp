import React from 'react';

const CartContext = React.createContext({
    items: [],   //data
    totalAmount: 0,   //data
    addItem: (item) => { }, //function for modification.
    removeItem: id => { }  //function for modification.
});


export default CartContext;