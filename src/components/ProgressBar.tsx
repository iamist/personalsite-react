import React from "react";
import styled from "styled-components";
interface IProgressIndicatorProps {
    progress: number
}

const ProgressIndicator = styled.div
.attrs({
    className: "transition border-4 border-slate-700 bg-gradient-to-b from-slate-400 to-slate-600 font-medium text-blue-100 text-center p-4 rounded-l-full"
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
        <>
            <label htmlFor="" className="mb-5 text-slate-600">{title}</label>
            <div className="w-full bg-slate-700 rounded-full">
                <ProgressIndicator progress={progress}>{progressLabel}</ProgressIndicator>
            </div>
        </>
    )
}

export default ProgressBar;
