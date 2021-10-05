import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_content_box">
                            <h1>IELTS</h1>
                            <p>IELTS is an English language test for study, migration or work. Over three million people take our test every year. IELTS is accepted by more than 11,000 employers, universities, schools and immigration bodies around the world.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="footer_content_box">
                            <h1>Contact Us</h1>
                            <h2>+80116695683</h2>
                            <h5>Email : <small>questions@domain.com</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;