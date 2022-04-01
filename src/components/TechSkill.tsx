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
        <div className="bg-zinc-800 py-10">
            <div className="container">
                <div className="relative pb-20">
                    <h2 className="section-title">Technical Stacks/Skills</h2>
                    <div className="inline-block sm:grid sm:grid-cols-3 sm:gap-3">
                    {
                        techStacks.map( tech => {
                            return (
                                <div id="{tech.title}" className="flex flex-col justify-end">
                                    <ProgressBar {...tech}>
                                    </ProgressBar>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkiils;
