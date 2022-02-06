import React from 'react';
import Link from '../components/Link';
import { favouriteWebsite } from '../db';




const Home = () => {


    return (
        <div className="home">
            {favouriteWebsite.map(website => (
                <Link name={website.name} link={website.link} desc={website.desc} />
            ))}
        </div>
    );
};


export default Home;
