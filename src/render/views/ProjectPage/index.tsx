import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import Projects from "./Projects";
import ProjectSettings from "./ProjectSettings";

export default function Project() {
    return (
        <PageWrapper
            header={<Header></Header>}
        >
            <div className="ProjectPage">
                <div className="projects">
                    <Projects></Projects>
                </div>
                <div className="settings">
                    <ProjectSettings></ProjectSettings>
                </div>
            </div>
        </PageWrapper>
    );
};
