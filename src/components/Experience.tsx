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
        <div className="container flex flex-col lg:flex-row items-center">
            <div className="w-10/12 md:w-10/12 lg:6/12 mx-auto relative pb-20">
                <h2 className="text-3xl text-left font-bold text-blue-500">Experience</h2>
                <div className="border-l-2 mt-10">
                    {
                        experiences.map(experience => {
                            return (
                                <div className="transform text-left transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                    <div className="text-gray-500 text-right pr-10 absolute -left-20 transform -translate-x-2/4 z-10 mt-2 md:mt-0">
                                        {experience.date.to} <br />
                                        {experience.date.from}
                                    </div>
                                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                                    <div className="flex-auto">
                                        <h1 className="text-lg">{experience.position}</h1>
                                        <h1 className="text-xl font-bold">{experience.company}</h1>
                                        <p>{experience.summary}</p>
                                        <span className="text-sm">{experience.tech}</span>
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
