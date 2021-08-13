import React from 'react'
import './side_bar.scss'

export default function SideBar() {
    return (
        <div className="SideBar">
            <div className="SideBar__avatar">H</div>
            <div className="SideBar__features">
                <div className="feature"></div>
                <div className="feature"></div>
                <div className="feature"></div>
            </div>
            <div className="SideBar__footer"></div>
        </div>
    )
}