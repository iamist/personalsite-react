import React from "react";
import styled from "styled-components";
interface IProgressIndicatorProps {
    progress: number
}

const ProgressIndicator = styled.div
.attrs({
    className: "transition border-4 border-slate-700 bg-gradient-to-b from-rose-900 to-orange-600 font-medium text-blue-100 text-center p-2 rounded-l-full"
})<IProgressIndicatorProps>
`& {
    width: ${props => props.progress}%
}
`;

interface IProgressBar {
    title: string
    progressLabel?: string
    progress: number
}

const ProgressBar: React.FC<IProgressBar> = ({title, progressLabel, progress}) => {
    return (
        <div className="mb-5">
            <label htmlFor="" className="px-4 py-2 lg:text-md inline-block text-slate-300">{title}</label>
            <div className="w-full bg-slate-700 rounded-full">
                <ProgressIndicator progress={progress}>{progressLabel}</ProgressIndicator>
            </div>
        </div>
    )
}

export default ProgressBar;
