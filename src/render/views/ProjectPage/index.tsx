import React from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 650, padding: 20 } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

export default function Project() {
    return (
        <PageWrapper
            header={<Header></Header>}
        >
            <Stack horizontal tokens={stackTokens} styles={stackStyles} className="Project">
                <Stack {...columnProps}>
                    <TextField label="项目入口文件路径" />
                </Stack>
                <Stack {...columnProps}>
                </Stack>
            </Stack>
        </PageWrapper>
    );
};
