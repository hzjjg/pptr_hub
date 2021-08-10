import React from "react";
import { ShortCut } from "./ShortCut";
import './short_cuts.scss'

export function ShortCuts() {

    const shortCuts = [1, 1, 1, 1, 1, 1]

    return (
        <div className="ShortCuts">
            {
                shortCuts.map((item) => (
                    <div className="ShortCuts__item">
                        <ShortCut></ShortCut>
                    </div>)
                )

            }
        </div>
    )
}