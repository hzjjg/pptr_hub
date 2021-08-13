import './header.scss'
import React from "react";
import { FontIcon } from '@fluentui/react/lib/Icon'

export default function Header() {

    const isMacOs = (window as any).process.platform === 'darwin'

    return (
        <header className="Header">
            <div className="Header__left">Taskhub</div>
            <div className="Header__right"></div>
            {
                isMacOs ? '' : <div className="win-control">
                    <FontIcon iconName="ChromeMinimize" className="win-control__item win-control__item--main"></FontIcon>
                    <div className="win-control__item win-control__item--max">▢</div>
                    {/* <FontIcon iconName="ChromeRestore" className="win-control__item win-control__item--restore"></FontIcon> */}
                    <FontIcon iconName="ChromeClose" className="win-control__item win-control__item--close"></FontIcon>
                </div>
            }
        </header>
    )
}