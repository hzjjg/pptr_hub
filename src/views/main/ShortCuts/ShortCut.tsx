import React from "react";
import './short_cut.scss'

export function ShortCut(props: { name: string, url: string }) {

    function clickShortCut(url: string) {
        fetch(url)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data);
            })
    }

    return (
        <div className="ShortCut" onClick={() => clickShortCut(props.url)}> {props.name} </div>
    )
}