import React from 'react';
import About from '../About/About';
import AddressSection from '../AddressSection/AddressSection';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <AddressSection></AddressSection>
        </div>
    );
};

export default Home;