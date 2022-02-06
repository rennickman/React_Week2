import React from 'react';
import Link from '../components/Link';
import { wishList } from '../db';




const ShoppingList = () => {


    return (
        <div className="shoppingList">
            {wishList.map(product => (
                <Link name={product.name} link={product.link} />
            ))}
        </div>
    );
};


export default ShoppingList;