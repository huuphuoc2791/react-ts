import * as React from "react";
import * as ReactDOM from "react-dom";
import Components = require("./app/main");
import {BrowserRouter} from 'react-router-dom';

function render(target: HTMLDivElement, components: typeof Components) {
    ReactDOM.render(<BrowserRouter>
        <components.main/>
    </BrowserRouter>, target);
}

const target = document.createElement("div");
target.className = "body";
render(target, Components);

document.body.appendChild(target);

declare var module: { hot?: { accept: (componentName: string, callback: () => void) => void } };
declare var require: (name: string) => any;

if (module.hot) {
    module.hot.accept("./app/main", () => render(target, require("./app/main")));
}