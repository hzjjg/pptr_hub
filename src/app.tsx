import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Views from './render/views/index'
import { RecoilRoot } from 'recoil';
import { Provider, teamsTheme } from '@fluentui/react-northstar'

declare global {
    interface Window {
        api: {
            send: (channel: string, ...arg: any) => void;
            receive: (channel: string, func: (event: any, ...arg: any) => void) => void;
        },
        platform: string
    }
}

function render() {
    ReactDOM.render(
        <RecoilRoot>
            <Provider theme={teamsTheme}>
                <Views />
            </Provider>
        </RecoilRoot>,
        document.querySelector("#root"));
}

render();