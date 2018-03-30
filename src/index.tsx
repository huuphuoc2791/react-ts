import * as React from "react";
import * as ReactDOM from "react-dom";
import Components = require("./app/main");

function render(target: HTMLDivElement, components: typeof Components) {
    ReactDOM.render(<components.main/>, target);
}

const target = document.createElement("div");
target.className = "container";
render(target, Components);
document.body.appendChild(target);

declare var module: { hot?: { accept: (componentName: string, callback: () => void) => void } };
declare var require: (name: string) => any;

if (module.hot) {
    module.hot.accept("./app/main", () => render(target, require("./app/main")));
}