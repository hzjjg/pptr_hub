import React from "react";
import './index.scss'
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import Task from "./task";
import Project from "./project";
import { RecoilRoot } from "recoil";

export default function Views() {

    return (
        <RecoilRoot>
            <div className="App">
                <SideBar></SideBar>
                <div className="App__body">
                    <Header></Header>
                    <div className="App__content">
                        <Task></Task>
                        {/* <Project></Project> */}
                    </div>
                </div>
            </div>
        </RecoilRoot>

    )
}