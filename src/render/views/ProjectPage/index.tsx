import React from "react";
import './project_page.scss'
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
                <div className="ProjectPage__left">
                    <h2 className="ProjectPage__title">项目</h2>
                    <div className="ProjectPage__projects">
                        <Projects></Projects>
                    </div>
                </div>
                <div className="ProjectPage__right">
                    <h2 className="ProjectPage__title">项目设置</h2>
                    <div className="ProjectPage__settings">
                        <ProjectSettings></ProjectSettings>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};
