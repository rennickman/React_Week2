import React from 'react';
import { Link as LinkR } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="navbar">
            <LinkR to="/" style={{ marginLeft: "10px" }}>Favourite Websites</LinkR>
            <LinkR to="/shopping" style={{ marginLeft: "40px" }}>Shopping List</LinkR>
        </div>
    );
};



export default Navbar;
