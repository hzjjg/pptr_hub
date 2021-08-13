import { CompoundButton } from "@fluentui/react";
import React from "react";
import { request } from "../../utils/request";
import './short_cut.scss'

export function ShortCut(props: { name: string, url: string, desc: string }): JSX.Element {

    function clickShortCut(url: string) {
        request(url)
            .then((response) => {
                console.log(response);
            })
    }

    return (
        <CompoundButton className="ShortCut" secondaryText={props.desc} onClick={() => clickShortCut(props.url)}>{props.name}</CompoundButton>
    )
}