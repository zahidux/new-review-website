import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about_container">
            <div className="container">
                <div className="about_top">
                    <h1>About Us</h1>
                </div>
                <div className="about_body">
                    <div className="about_cotent">
                        <h1>What is IELTS?</h1>
                        <p>The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA.</p>
                        <p>Your ability to listen, read, write and speak in English will be assessed during the test. IELTS is graded on a scale of 1-9. </p>
                        <p>IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge Assessment English.</p>
                    </div>
                    <div className="about_cotent">
                        <h1>Why take IELTS?</h1>
                        <p>If you are looking to work, live or study in an English-speaking country, then you must be able to demonstrate a high level of English language ability.</p>
                        <p>Being able to communicate in the native language of the country you wish to work or study in, has a wide range of benefits. It is also essential for job opportunities as well as integration into the community.</p>
                        <p>IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge Assessment English.</p>
                        <p>IELTS is the most popular test for those looking to migrate to Australia, Canada, New Zealand and the UK. It is globally recognised by more than 11,000 employers, universities, schools and immigration bodies including 3,400 institutions in the USA.</p>
                    </div>
                    <div className="about_cotent">
                        <h1>How IELTS is developed</h1>
                        <p>IELTS is developed to provide a fair and accurate assessment of English language proficiency.</p>
                        <p>Test questions are developed by language specialists from Australia, Canada, New Zealand, the UK and the USA. The test covers four sections: Listening, Reading, Writing and Speaking.</p>
                        <p>IELTS test content reflects everyday situations. It is unbiased and fair to all test takers from all backgrounds.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;