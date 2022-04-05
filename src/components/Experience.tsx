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
        <div className="bg-zinc-900 py-10">
            <div className="container">
                <h2 className="text-4xl section-title">Experience</h2>
                {
                    experiences.map(experience => {
                        return (
                            <div className="experience-block text-left transition cursor-pointer hover:-translate-y-2 duration-500 relative flex items-center px-6 py-4 bg-zinc-800 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="flex-auto">
                                    <h3 className="text-md exp-position">

                                        <span className="rounded-sm mb-2 mr-2 inline-block px-4 py-2 text-xs text-slate-200 bg-neutral-900">{experience.date.from} to {experience.date.to}</span>

                                        {experience.position}
                                    </h3>
                                    <h2 className="text-2xl font-bold text-slate-300 company">{experience.company}</h2>
                                    <p className="text-slate-400 py-0">{experience.summary}</p>
                                    <span className="text-sm text-slate-600 tech">{experience.tech}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;
