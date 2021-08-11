import './main.scss'
import React, { useState } from "react"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import { ShortCuts } from "./ShortCuts"

export default function Main() {

    const [btns, setBtns] = useState([])


    return (
        <div className="Main">
            <SideBar></SideBar>
            <div className="Main__body">
                <Header></Header>
                <div className="Main__content">
                    <ShortCuts></ShortCuts>
                    <div className="Main__log"></div>
                </div>
            </div>
        </div>
    )
}