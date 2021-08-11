import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Views from './views/index'

function render() {
  ReactDOM.render(<Views />, document.querySelector("#app"));
}

render();