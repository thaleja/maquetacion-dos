import React from 'react';
import './About.css';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Menu />
            <div className="about-container">
                <h1>Acerca de</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default About;