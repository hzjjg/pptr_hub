import React from 'react'
import { useRecoilState } from 'recoil'
import { curPageState } from '../../recoil/app'
import { PageName } from '../../consts'
import './side_bar.scss'
import { AppsIcon, MoleculeIcon } from '@fluentui/react-northstar'

const FeatureItem = (prop: { icon: any, text: string, pageName: PageName }) => {

    const [curPage, setCurPage] = useRecoilState(curPageState)

    return (
        <div className={`feature ${curPage.name === prop.pageName ? 'active' : ''}`} onClick={() => setCurPage({ name: prop.pageName })}>
            {prop.icon}
            <div className="feature__name" style={{ paddingTop: '5px' }}>{prop.text}</div>
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

            <div className="SideBar__avatar"></div>
            <div className={`SideBar__features`}>
                <FeatureItem icon={<MoleculeIcon size="large" />} text="任务" pageName={PageName.task}></FeatureItem>
                <FeatureItem icon={<AppsIcon size="large" />} text="项目" pageName={PageName.projects}></FeatureItem>
            </div>
            <div className="SideBar__footer"></div>
        </div>
    )
}