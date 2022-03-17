import React from "react";
import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
    return (
        <div id="footer" className="container my-10 relative bottom-0 left 0 w-full">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8 w-full" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    &copy; {new Date().getFullYear()}
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </div>
    )
}

export default Footer;
