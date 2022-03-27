import React from "react";
import resumePhoto from "../assets/img/web-photo.png";

const AboutMe: React.FC = () => {
    return (
        <div id="aboutMe" className="container py-20">
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-4 mr-20">
                    <h1 className="text-4xl text-slate-100">Hello, my name Christian Vicente!</h1>
                    <div className="text-2xl mt-10">
                        <p>I live in the Philippines and I am Computer Science graduate.</p>

                        <p>I work as a fullstack developer and I started my professional career in 2005. I have worked with different companies, established and even start-ups.</p>

                    </div>
                </div>
                <div className="">
                    <img src={resumePhoto} className="border-4 border-zinc-800 max-w-full rounded-full shadow-sm drop-shadow-lg" alt="Profile"/>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
export const path = '/about-me'
