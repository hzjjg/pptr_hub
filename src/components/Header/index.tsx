import './header.scss'
import React from "react";

export default function Header() {

    console.log((window as any).electron);
        

    return (
        <header className="Header">
            header
            {
                true ?? <div>ahhaha</div>
            }
        </header>
    )
}