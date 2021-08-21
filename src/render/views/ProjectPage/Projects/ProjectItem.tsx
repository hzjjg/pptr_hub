import { Card, CardHeader, Flex, Text, CardFooter, Button, StarIcon, DownloadIcon, MoreIcon, CardBody, PlayIcon } from "@fluentui/react-northstar";
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
                        <Button icon={<StarIcon />} iconOnly text title="Favourite" />
                        <Button icon={<DownloadIcon />} iconOnly text title="Download" />
                        <Button icon={<MoreIcon />} iconOnly text title="More" />
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    )
}