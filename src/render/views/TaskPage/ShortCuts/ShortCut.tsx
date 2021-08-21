import React from "react";
import { Button } from '@fluentui/react-northstar'
import request from "../../../utils/request";
import './short_cut.scss'

type Task = {
    url: string,
    name: string,
    desc: string,
    params: Record<string | number, any>,
    paramsDef: Record<string | number, { label: string, type: string, default?: any }>
}

export function ShortCut(props: { task: Task }): JSX.Element {

    const { url, desc, name, params } = props.task

    function clickShortCut(url: string, params: Record<string | number, any>) {
        request(`${'task://'}${url}`, params)
            .then((response) => {
                console.log(response);
            })
    }

    return (
        <Button content={name} icon="play" iconPosition="after" primary onClick={() => clickShortCut(url, params)} />
    )
}