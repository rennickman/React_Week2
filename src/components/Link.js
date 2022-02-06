import React from 'react';



const Link = ({ name, link, desc }) => {


    return (
        <div className="link" style={{ border: "1px solid grey", textAlign: "center" }}>
            <h3>{name}</h3>
            <a href={link} target="_blank" rel="noreferrer">Visit Website</a>
            <p>{desc}</p>
        </div>
    );
};

export default Link;
