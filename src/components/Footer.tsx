import React from "react";
import SocialMedia from "./SocialMedia";

const Footer: React.FC = () => {
    return (
        <div id="footer" className="py-8 bg-zinc-900 w-full">
            <div className="container text-md sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <em className="text-zinc-700">Work smarter, not harder.</em>
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </div>
    )
}

export default Footer;
