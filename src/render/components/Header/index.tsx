import './header.scss'
import React from "react";
import { CloseIcon, WindowMaximizeIcon, WindowMinimizeIcon, WindowRestoreIcon } from '@fluentui/react-northstar';

export default function Header() {

    const isMacOs = (window as any).process.platform === 'darwin'

    const iconStyle = {
        fontSize: '12px',
        width: '40px',
        height: '100%',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <header className={`Header ${isMacOs ? 'macOs' : ''}`}>
            <div className="Header__left">Taskhub</div>
            <div className="Header__right"></div>
            {
                isMacOs ? '' : <div className="win-control">
                    <WindowMinimizeIcon style={iconStyle} />
                    <WindowMaximizeIcon style={iconStyle} />
                    {/* <WindowRestoreIcon  style={iconStyle} /> */}
                    <CloseIcon style={iconStyle} />
                </div>
            }
        </header>
    )
}