import { FontIcon } from '@fluentui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { curPageState } from '../../recoil/app'
import { PageName } from '../../consts'
import './side_bar.scss'

const FeatureItem = (prop: { iconName: string, text: string, pageName: PageName }) => {

    const [curPage, setCurPage] = useRecoilState(curPageState)

    return (
        <div className={`feature ${curPage.name === prop.pageName ? 'active' : ''}`} onClick={() => setCurPage({ name: prop.pageName })}>
            <FontIcon iconName={prop.iconName} className="feature__icon"></FontIcon>
            <div className="feature__name">{prop.text}</div>
        </div>
    )
}

export default function SideBar() {

    return (
        <div className="SideBar">

            <div className="SideBar__drap-region">
                <div></div>
                <div></div>
            </div>

            <div className="SideBar__avatar">H</div>
            <div className={`SideBar__features`}>
                <FeatureItem iconName="MicrosoftFlowLogo" text="任务" pageName={PageName.task}></FeatureItem>
                <FeatureItem iconName="CubeShape" text="项目" pageName={PageName.projects}></FeatureItem>
            </div>
            <div className="SideBar__footer"></div>
        </div>
    )
}