import { CompoundButton } from "@fluentui/react";
import React from "react";
import './short_cut.scss'

export function ShortCut(props: { name: string, url: string, desc: string }) {

    function clickShortCut(url: string) {
        fetch(url)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data);
            })
    }

    return (
        <CompoundButton className="ShortCut" secondaryText={props.desc} onClick={() => clickShortCut(props.url)}>{props.name}</CompoundButton>
    )
}