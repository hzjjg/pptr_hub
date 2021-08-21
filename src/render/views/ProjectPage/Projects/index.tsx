import React from "react";
import './projects.scss'
import ProjectItem from './ProjectItem'

export default function Projects() {
    return (
        <div className="Projects">
            {
                Array(10).fill({}).map((item) =>
                    <div className="Projects__item">
                        <ProjectItem />
                    </div>
                )
            }
        </div>
    )
}