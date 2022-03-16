import React from "react";
import ProgressBar from "./ProgressBar";

interface ITechStack {
    title: string
    progressLabel: string
    progress: number
}

interface IProps {
    techStacks: Array<ITechStack>
}

const TechSkiils : React.FC<IProps> = ({techStacks}) => {
    return (
        <div className="w-10/12 md:w-10/12 lg:6/12 mx-auto relative pb-20">
        <h2 className="text-3xl text-left font-bold text-blue-500">Technical Stacks/Skills</h2>
        {
            techStacks.map( tech => {
                return (
                    <ProgressBar {...tech}>
                    </ProgressBar>
                )
            })
        }
        </div>
    )
}

export default TechSkiils;
