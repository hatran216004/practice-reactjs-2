import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero />
            <div className="container">
                <Popular />
                <Offers />
                <NewCollections />
                <NewsLetter />
            </div>
        </div>
    );
};

export default Shop;
