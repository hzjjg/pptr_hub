import React from "react";
import './index.scss'
import SideBar from "../components/SideBar"
import TaskPage from "./TaskPage";
import ProjectPage from "./ProjectPage";
import { useRecoilValue } from "recoil";
import { curPageState } from "../recoil/app";
import { PageName } from "../consts";

export default function Views() {

    const curPage = useRecoilValue(curPageState)

    const curPageComponent = {
        [PageName.task]: <TaskPage></TaskPage>,
        [PageName.projects]: <ProjectPage></ProjectPage>
    }[curPage.name]

    return (
        <div className="App">
            <div className="App__side-bar">
                <SideBar></SideBar>
            </div>
            <div className="App__content">
                {curPageComponent}
            </div>
        </div>

    )
}