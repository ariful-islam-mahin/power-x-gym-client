import React from 'react';

const Class = ({item}) => {
    const {picture, icon, title} = item;

    const classStyle = {
        backgroundImage: `url(${picture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        height: "387px",
        
    }
    return (
        <div className="col-md-4 mt-3 text-center text-white ">
                <div style={classStyle} className="px-3 d-flex align-items-end">
                    <div className="mb-3">
                        <img  src={icon} alt=""/>
                        <h2 className={"font-weight-bold my-4"}><span className={title === "WORKOUT" && "text-brand"}>{title}</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate adipisci provident deleniti perspiciatis ad!</p>
                    </div>
                </div>
        </div>
    );
};

export default Class;