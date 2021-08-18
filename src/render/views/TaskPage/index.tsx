import './task_page.scss'
import React, { useState } from "react"
import { ShortCuts } from "./ShortCuts"
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header'

export default function Task() {

    const [btns, setBtns] = useState([])


    return (
        <PageWrapper
            header={<Header></Header>}
        >
            <div className="Task">
                <ShortCuts></ShortCuts>
                <div className="Task__log"></div>
            </div>
        </PageWrapper>
    )
}