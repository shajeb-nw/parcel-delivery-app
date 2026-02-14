import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import ServicesSection from './ServicesSection';
import MarqueSec from './MarqueSec';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <ServicesSection></ServicesSection>
            <MarqueSec></MarqueSec>
        </div>
    );
};

export default Home;