import React from "react";
import { ShortCut } from "./ShortCut";
import './short_cuts.scss'

export function ShortCuts() {

    const doamin = 'http://localhost:8848/biz-admin'

    const shortCuts = [
        {
            name: '登录',
            url: `${doamin}/login`,
            desc: '登录企业后台',
        },
        {
            name: '远程相机',
            desc: 'webrtc root',
            url: `${doamin}/remote-control/run?feature=camera&use_webrtc=true&use_a11y=false`
        },
        {
            name: '远程相机',
            desc: 'webrtc 辅助权限',
            url: `${doamin}/remote-control/run?feature=camera&use_webrtc=true&use_a11y=true`
        },
        {
            name: '远程相机',
            desc: '345 root',
            url: `${doamin}/remote-control/run?feature=camera&use_webrtc=false&use_a11y=false`
        },
        {
            name: '远程相机',
            desc: '345 辅助权限',
            url: `${doamin}/remote-control/run?feature=camera&use_webrtc=false&use_a11y=true`
        },
        {
            name: '观察模式',
            desc: 'webrtc root',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=true&use_a11y=false`
        },
        {
            name: '观察模式',
            desc: 'webrtc 辅助权限',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=true&use_a11y=true`
        },
        {
            name: '观察模式',
            desc: '345 root',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=false&use_a11y=false`
        },
        {
            name: '观察模式',
            desc: '345 辅助权限',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=false&use_a11y=true`
        },
        {
            name: '远程控制',
            desc: 'webrtc root',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=true&use_a11y=false`
        },
        {
            name: '远程控制',
            desc: 'webrtc 辅助权限',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=true&use_a11y=true`
        },
        {
            name: '远程控制',
            desc: '345 root',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=false&use_a11y=false`
        },
        {
            name: '远程控制',
            desc: '345 辅助权限',
            url: `${doamin}/remote-control/run?feature=remote_control&use_webrtc=false&use_a11y=true`
        },
    ]

    return (
        <div className="ShortCuts">
            {
                shortCuts.map((item) => (
                    <div className="ShortCuts__item" key={item.url}>
                        <ShortCut name={item.name} url={item.url} desc={item.desc}></ShortCut>
                    </div>)
                )

            }
        </div>
    )
}