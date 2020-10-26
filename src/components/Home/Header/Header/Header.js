import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <div className="header-bg py-4 pb-5 mb-5">
                <div className="container">
                    <Navbar/>
                    <MainHeader/>
                </div>
            </div>
        </div>
    );
};

export default Header;