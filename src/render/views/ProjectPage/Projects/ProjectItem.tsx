import { Card, Flex, Text, CardFooter, Button, CardBody, PlayIcon, SettingsIcon, TrashCanIcon } from "@fluentui/react-northstar";
import React, { CSSProperties } from "react";

const style: CSSProperties = {
}

export default function ProjectItem() {
    return (
        <Card className="ProjectItem" style={style}>
            <CardBody>
                <Flex gap="gap.small">
                    <Flex column>
                        <Text content="企业后台" weight="bold" />
                        <Text content="https://biz.airdroid.com" size="small" />
                    </Flex>
                </Flex>
            </CardBody>
            <CardFooter fitted>
                <Flex space="between">
                    <Button icon={<PlayIcon />} iconOnly />
                    <Flex>
                        <Button icon={<SettingsIcon />} iconOnly text title="Settings" />
                        <Button icon={<TrashCanIcon />} iconOnly text title="More" />
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    )
}