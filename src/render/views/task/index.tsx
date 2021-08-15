import './task.scss'
import React, { useState } from "react"
import { ShortCuts } from "./ShortCuts"

export default function Task() {

    const [btns, setBtns] = useState([])


    return (
        <div className="Task">
            <ShortCuts></ShortCuts>
            <div className="Task__log"></div>
        </div>
    )
}