import { FontIcon } from '@fluentui/react'
import React from 'react'
import './side_bar.scss'

export default function SideBar() {
    return (
        <div className="SideBar">

            <div className="SideBar__drap-region">
                <div></div>
                <div></div>
            </div>

            <div className="SideBar__avatar">H</div>
            <div className="SideBar__features">
                <div className="feature">
                    <FontIcon iconName="MicrosoftFlowLogo" className="feature__icon"></FontIcon>
                    <div className="feature__name">任务</div>
                </div>
                <div className="feature">
                    <FontIcon iconName="CubeShape" className="feature__icon"></FontIcon>
                    <div className="feature__name">项目</div>
                </div>
            </div>
            <div className="SideBar__footer"></div>
        </div>
    )
}