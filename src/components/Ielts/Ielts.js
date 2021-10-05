import React from 'react';
import { useState, useEffect } from 'react';
import SingleIelts from '../SingleIelts/SingleIelts';
import './Ielts.css'

const Ielts = () => {
    const [ielts, setIelts] = useState([]);
    useEffect(() => {
        fetch('./ielts.JSON')
            .then(res => res.json())
            .then(data => setIelts(data))
    }, [])
    return (
        <div className="ielts_container container">
            <div className="ielts_top">
                <h1>IELTS</h1>
                <p>'IELTS Progress Check' is an official online practice <br /> test marked by IELTS experts.</p>
            </div>
            <div className="row g-4">
                {
                    ielts.map(Sielts => <SingleIelts
                        key={Sielts.key}
                        ielts={Sielts}
                    ></SingleIelts>)
                }
            </div>
        </div>
    );
};

export default Ielts;