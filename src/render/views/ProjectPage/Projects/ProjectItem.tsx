import { Card } from "@fluentui/react-northstar";
import React, { CSSProperties } from "react";


const style: CSSProperties = {
    width: 60,
    height: 60,
}

export default function ProjectItem() {
    return (
        <Card className="ProjectItem" style={style}>
            project item
        </Card>
    )
}