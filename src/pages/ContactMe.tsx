import React from "react";

const ContactMe: React.FC = () => {
    return (
        <div id="contactMe" className="container">
            <h1 className="title">Contact Me</h1>
            <p className="content">
                If you wish to contact me, you can send me message through the form below:
            </p>
        </div>
    )
};

export default ContactMe;
export const path = '/contact-me'
