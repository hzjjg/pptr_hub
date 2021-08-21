import './task_page.scss'
import React, { useState } from "react"
import { ShortCuts } from "./ShortCuts"
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header'

export default function TaskPage() {

    return (
        <PageWrapper
            header={<Header></Header>}
        >
            <div className="TaskPage">
                <ShortCuts></ShortCuts>
                <div className="TaskPage__log"></div>
            </div>
        </PageWrapper>
    )
}