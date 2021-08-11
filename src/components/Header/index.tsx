import './header.scss'
import React from "react";

export default function Header() {

    const isMacOs = (window as any).process.platform

    return (
        <header className="Header">
            <div className="Header__left">pptr hub</div>
            <div className="Header__right"></div>
            {
                isMacOs ? '' : <div className="win-control">
                    <div className="win-control__item win-control__item--main">__</div>
                    <div className="win-control__item win-control__item--max">口</div>
                    <div className="win-control__item win-control__item--close">❎</div>
                </div>
            }
        </header>
    )
}