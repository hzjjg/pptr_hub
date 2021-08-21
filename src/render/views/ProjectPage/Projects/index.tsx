import React from "react";
import './projects.scss'
import ProjectItem from './ProjectItem'

export default function Projects() {
    return (
        <div className="Projects">
            {
                Array(10).fill({}).map((item) =>
                    <div className="Project__item">
                        <ProjectItem />
                    </div>
                )
            }
        </div>
    )
}