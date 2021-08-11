import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import Views from './views/index'

initializeIcons();

function render() {
  ReactDOM.render(<Views />, document.querySelector("#app"));
}

render();