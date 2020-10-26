import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Program = ({program}) => {
    const programStyle = {
        backgroundImage: `url(${program.picture})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "433px",
        position: 'relative'
    }
    const titleStyle = {
        position: 'absolute',
        top: '75%'
    }
    return (
        <div className="col-md-6 mt-3">
            <div style={programStyle}>
                <div style={titleStyle} className="bg-brand py-3 px-4">
                    <h4 className="font-weight-bold">{program.title} <FontAwesomeIcon className="ml-3" icon={faArrowRight}/></h4>
                </div>
            </div>
        </div>
    );
};

export default Program;