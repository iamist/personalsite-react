import React from "react";
import resumePhoto from "../assets/img/web-photo.png";
import SocialMedia from "./SocialMedia";

const Cover: React.FC = () => {
    return (
        <div className="bg-gradient-to-b py-10 from-zinc-800 to-zinc-900">
            <div className="container flex justify-between items-center">
                <div className="flex flex-col mr-20">
                    <h1 className="text-4xl font-bold text-orange-600 sm:text-5xl md:text-6xl text-center sm:text-left">Hello, I'm Christian Vicente</h1>
                    <p className="text-3xl sm:text-left pt-3 sm:pt-5">
                        A <span className="text-slate-200 inline-block">fullstack web developer</span> passionate in building awesome projects for the Web.
                    </p>
                    <div className="cover-social mt-10 w-2/12">
                        <SocialMedia />
                    </div>
                </div>
                <div className="pl-10">
                    <img src={resumePhoto} className="border-4 border-zinc-800 max-w-full rounded-full shadow-sm drop-shadow-lg" alt="Profile"/>
                </div>
            </div>
        </div>
    )
};

export default Cover;
