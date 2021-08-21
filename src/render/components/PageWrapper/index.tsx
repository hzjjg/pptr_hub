import { Flex } from '@fluentui/react-northstar'
import React from 'react'
// import './page_wrapper.scss'

export default function PageWrapper(prop: { header?: JSX.Element, children: JSX.Element }) {
    return (
        <Flex className="PageWrapper" column>
            {prop.header &&
                <div className="PageWrapper__header">
                    {prop.header}
                </div>
            }
            <div className="PageWrapper__content">
                {prop.children}
            </div>
        </Flex>
    )
}