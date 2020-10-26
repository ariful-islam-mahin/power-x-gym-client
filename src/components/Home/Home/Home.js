import React from 'react';
import Classes from '../Classes/Classes/Classes';
import Header from '../Header/Header/Header';
import About from '../About/About/About';
import TrainingPrograms from '../TrainingPrograms/TrainingPrograms/TraninigPrograms'
import './Home.css'
import Features from '../Features/Features/Features';
import Footer from '../Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Classes/>
            <About/>
            <TrainingPrograms/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Home;