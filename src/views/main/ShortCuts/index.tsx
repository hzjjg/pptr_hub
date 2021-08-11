import React from "react";
import { ShortCut } from "./ShortCut";
import './short_cuts.scss'

export function ShortCuts() {

    const doamin = 'http://localhost:8848/biz-admin'

    const shortCuts = [
        {
            name: '登录',
            url: `${doamin}/login`,
        },
        {
            name: '远程相机/rtc/root',
            url: `${doamin}/remote-control/run?feature=remote_control&use_vnc=false&use_unroot=true`
        },
        {
            name: 'test',
            url: `http://www.google.com`
        },
    ]

    return (
        <div className="ShortCuts">
            {
                shortCuts.map((item) => (
                    <div className="ShortCuts__item" key={item.url}>
                        <ShortCut name={item.name} url={item.url}></ShortCut>
                    </div>)
                )

            }
        </div>
    )
}