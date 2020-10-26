import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    // const handleAddClass = () => {
    //     fetch('http://localhost:5000/addClasses', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(classItem)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         if(success){
    //             alert('data added successfully')
    //         }
    //     })
    // }
    return (
        <section className="container py-5">
            {/* <button className="btn" onClick={handleAddClass}>add class</button> */}
            <div className="row">
                {
                    classes.map(item => <Class item={item}/>)
                }
            </div>
        </section>
    );
};

export default Classes;