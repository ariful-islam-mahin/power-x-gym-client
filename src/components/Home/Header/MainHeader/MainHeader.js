import React from 'react';
import playButton from '../../../../Image & Icon/play-button.png'

const MainHeader = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center py-5">
            <div className="col-md-6 text-white my-5">
                <h1 className="font-weight-bold">
                    THE BEST FITNESS STUDIO IN TOWN
                </h1>
                <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium nulla expedita ut delectus reiciendis minima accusamus vero, atque quis, necessitatibus obcaecati unde perspiciatis hic. Quidem officiis maiores</p>
                <button className="btn bg-brand px-4 font-weight-bold">
                    JOIN US
                </button>
            </div>
            <div className="col-md-6 my-5">
                <img src={playButton} alt=""/>
            </div>
        </div>
    );
};

export default MainHeader;