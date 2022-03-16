import React from "react";
import styled from "styled-components";
interface IProgressIndicatorProps {
    progress: number
}

const ProgressIndicator = styled.div
.attrs({
    className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
})<IProgressIndicatorProps>
`& {
    width: ${props => props.progress}%
}
`;

interface IProgressBar {
    title: string
    progressLabel: string
    progress: number
}

const ProgressBar: React.FC<IProgressBar> = ({title, progressLabel, progress}) => {
    return (
        <>
            <label htmlFor="">{title}</label>
            <div className="w-full bg-gray-200 rounded-full">
                <ProgressIndicator progress={progress}>{progressLabel}</ProgressIndicator>
            </div>
        </>
    )
}

export default ProgressBar;
