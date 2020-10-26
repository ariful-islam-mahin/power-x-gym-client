import React, { useEffect, useState } from 'react';
import Program from '../Program/Program';

const Training = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trainings')
        .then(res => res.json())
        .then(data => setTrainings(data))
    }, [])

    // const addTraining = () => {
    //     fetch('http://localhost:5000/addTraining', {
    //         method: 'POST',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(programs)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         if(success){
    //             alert('data added successfully')
    //         }
    //     })
    // }
    return (
        <section className="container text-center mb-5">
            {/* <button onClick={addTraining} className="btn">Add Training</button> */}
            <h2 className="py-5 font-weight-bold">TRAINING <span className="text-brand">PROGRAMS</span></h2>
            <div className="row">
                {
                    trainings.map(program => <Program program={program}/>)
                }
            </div>
        </section>
    );
};

export default Training;