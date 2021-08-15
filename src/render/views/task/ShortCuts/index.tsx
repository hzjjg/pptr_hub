import React, { useEffect, useState } from "react";
import request from "../../../utils/request";
import { ShortCut } from "./ShortCut";
import './short_cuts.scss'

export function ShortCuts() {

    const [shortCuts, setShortCuts] = useState([])

    const initTasks = async () => {
        const tasks = await request('task:///getTasks')
        console.log(tasks);
        setShortCuts(tasks)
    }

    useEffect(() => {
        initTasks()
    }, [])

    return (
        <div className="ShortCuts">
            {
                shortCuts.map((item, index) => (
                    <div className="ShortCuts__item" key={index}>
                        <ShortCut name={item.name} url={item.url} desc={item.desc}></ShortCut>
                    </div>)
                )

            }
        </div>
    )
}