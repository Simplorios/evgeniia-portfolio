import React from 'react';

type ProjectsContainerProps = {
    children: React.ReactNode;
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({ children }) => {
    return <section className="py-5 grid grid-flow-col auto-cols-fr gap-10">{children}</section>;
};
