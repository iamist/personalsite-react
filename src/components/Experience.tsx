import React from "react";

interface IExpDate {
    from: string
    to: string
}

interface IExperience {
    date: IExpDate
    company: string
    position: string
    summary: string
    tech: Array<string>
}

interface IProps {
    experiences: Array<IExperience>
}

const Experience: React.FC<IProps> = ({experiences}) => {
    return (
        <div className="bg-zinc-800 py-20">
            <div className="container pr-0">
                <h2 className="section-title">Experience</h2>
                <div className="border-l-2 border-zinc-900 mt-10">
                    {
                        experiences.map(experience => {
                            return (
                                <div className="experience-block transform text-left transition cursor-pointer hover:-translate-y-2 duration-500 ml-10 relative flex items-center px-6 py-4 bg-zinc-900 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div className="w-6 h-6 duration-500 bg-zinc-900 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0 dot-timeline"></div>
                                    <div className="text-slate-400 text-right pr-10 absolute -left-20 transform -translate-x-2/4 z-10 mt-2 text-sm font-bold text-slate-600 md:mt-0 date">
                                        {experience.date.to} <br />
                                        {experience.date.from}
                                    </div>
                                    <div className="w-10 h-1 duration-500 bg-zinc-900 absolute -left-10 z-0  connect-h-timeline"></div>
                                    <div className="flex-auto">
                                        <h1 className="text-md exp-position">{experience.position}</h1>
                                        <h1 className="text-2xl font-bold text-slate-300 company">{experience.company}</h1>
                                        <p className="text-slate-400">{experience.summary}</p>
                                        <span className="text-sm text-slate-600 tech">{experience.tech}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;
