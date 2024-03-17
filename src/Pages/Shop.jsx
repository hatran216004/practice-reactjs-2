import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    );
};

export default Shop;
