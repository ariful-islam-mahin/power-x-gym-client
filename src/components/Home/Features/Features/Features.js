import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])

    // const addFeature = () => {
    //     fetch('http://localhost:5000/addFeatures', {
    //         method: 'POST',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(features)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             alert('data added successfully')
    //         }
    //     })
    // }
    return (
        <section className="container text-center pb-5">
            {/* <button onClick={addFeature} className="btn">add feature</button> */}
            <h2 className="font-weight-bold py-5"><span className="text-brand">WHY</span> CHOOSE US</h2>
            <div className="row">
                {
                    features.map(feature => <Feature feature={feature}/>)
                }
            </div>
        </section>
    );
};

export default Features;