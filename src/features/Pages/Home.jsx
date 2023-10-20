import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ProductList from '../product-list/ProductList';

const Home = () => {
    return (
        <div>
            <Navbar>
                <ProductList></ProductList>
            </Navbar>
        </div>
    );
};

export default Home;