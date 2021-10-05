
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import HomeIelts from '../HomeIelts/HomeIelts';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./homeIelts.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <div className="home_container">
                <div className="overlay">
                    <div className="container">
                        <div className="home_content_box">
                            <div className="home_content">
                                <h1>New milestone for world-leading <br /> English test</h1>
                                <p>IELTS trusted by more than 11,000 organisations across the globe</p>
                                <div className="btn_group">
                                    <Button className="btn_regular" variant="primary">Exam Test</Button>
                                    <Button className="btn_regular" variant="info">Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* home ielts area */}
            <div className="home_ielts_container">
                <div className="container">
                    <h1>IELTS</h1>
                    <div className="row g-4">
                        {
                            services.map(service => <HomeIelts
                                key={service.key}
                                service={service}
                            ></HomeIelts>)
                        }
                    </div>
                    <div className="home_btn text-center">
                        <Button className="home_bottom_btn" variant="info">See More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;