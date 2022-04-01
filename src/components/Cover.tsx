import React from "react";
import resumePhoto from "../assets/img/web-pic.png";
import coverBg from "../assets/img/cover-bg.png";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";

const CoverBgContainer = styled.div.attrs({
    className: 'bg-zinc-900 py-10 bg-no-repeat bg-cover bg-cover'
})
`& {
    background-image: url(${coverBg})
}`

const Cover: React.FC = () => {
    return (
        <CoverBgContainer>
            <div className="container relative sm:flex sm:justify-between sm:items-center">
                <div className="sm:pr-10 sm:order-2">
                    <img src={resumePhoto} className="border-4 border-zinc-800 max-w-full rounded-full shadow-sm drop-shadow-lg object-fit h-auto w-60 m-auto mb-10 sm:mb-0" alt="Profile"/>
                </div>
                <div className="sm:flex sm:flex-col sm:mr-20 sm:order-1">
                    <h1 className="text-3xl sm:text-4xl">Hello, I am <span className="text-slate-200 px-4 bg-orange-600">Christian Vicente</span></h1>
                    <p className="text-3xl sm:text-left my-4 py-0 sm:pt-3">
                        A <span className="text-slate-200 inline">fullstack web developer</span> passionate in building awesome projects for the Web.
                    </p>
                    <div className="cover-social mt-10 w-2/12">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </CoverBgContainer>
    )
};

export default Cover;
