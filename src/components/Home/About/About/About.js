import React from 'react';
import aboutImg from '../../../../Image & Icon/about.jpg'

const About = () => {
    return (
        <section className="container my-5">
            <div className="row d-flex justify-content-between">
                <div className="col-md-6">
                    <img className="w-100" src={aboutImg} alt=""/>
                </div>
                <div className="col-md-6 px-5 mt-4 mt-md-0">
                    <h1 style={{color:'#f4f4f5'}} className="font-weight-bold">ABOUT US</h1>   
                    <h2 className="font-weight-bold text-brand">WE ARE HERE TO DREAM!</h2>
                    <h2 className="font-weight-bold">OUT TEAM IS HERE SURVE YOU.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, asperiores id molestiae voluptates, nostrum neque et, molestias temporibus corrupti consequuntur animi impedit. Minima natus quas molestias modi eveniet harum impedit.</p>
                </div>
            </div>
        </section>
    );
};

export default About;