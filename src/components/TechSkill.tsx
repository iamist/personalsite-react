import React from "react";
import ProgressBar from "./ProgressBar";

interface ITechStack {
    title: string
    progressLabel?: string
    progress: number
}

interface IProps {
    techStacks: Array<ITechStack>
}

const TechSkiils : React.FC<IProps> = ({techStacks}) => {
    return (
        <div className="container">
            <div className="relative pb-20">
                <h2 className="section-title">Technical Stacks/Skills</h2>
                <div className="grid grid-cols-4 gap-4">
                {
                    techStacks.map( tech => {
                        return (
                            <div id="{tech.title}" className="flex flex-col items-center justify-end">
                                <ProgressBar {...tech}>
                                </ProgressBar>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default TechSkiils;
