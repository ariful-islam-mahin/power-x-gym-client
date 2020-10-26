import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className="col-md-4 text-center mt-3">
            <div className="border py-3">
                <img style={{width:"65px"}} className="py-5" src={feature.icon} alt=""/>
                <h5 className="font-weight-bold">{feature.title}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe sint modi delectus tempore voluptas!</p>
            </div>
        </div>
    );
};

export default Feature;