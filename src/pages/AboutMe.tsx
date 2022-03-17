import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div id="aboutMe">
            <h1 className="title">Hello, I'm Ist!</h1>
            <p className="content">
                I'm from the Philippines. I'm a Computer Science graduate and I work as a fullstack web developer. I have more than 17 years of professional experience in web development and have worked with different companies both established and startups.
            </p>
        </div>
    )
};

export default AboutMe;
export const path = '/about-me'
