import React from "react";
import resumePhoto from "../assets/img/resume-pic.png";

const Cover: React.FC = () => {
    return (
        <div className="flex justify-between items-center font-body">
            <div className="container pb-12 sm:pb-48 lg:pb-48">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="rounded-full border-8 border-sky-100 shadow-xl">
                        <img src={resumePhoto} className="h-48 sm:h-56 rounded-full" alt="Profile"/>
                    </div>
                    <div className="lg:pl-8 pt-8 sm:pt-10 lg:pt-0">
                        <h1 className="font-header text-5xl sm:text-5xl md:text-7xl text-center sm:text-left">Hello, I'm Christian Vicente</h1>
                        <p className="flex flex-col text-4xl sm:text-4xl md:text-4xl text-center sm:text-left sm:flex-row justify-center lg:justify-start pt-3 sm:pt-5">
                            An experienced developer passionate <br /> in building awesome projects for the Web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cover;
