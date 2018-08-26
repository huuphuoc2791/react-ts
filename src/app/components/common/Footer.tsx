import * as React from "react";
import * as classnames from "classnames";

interface IFooterProps {

}

interface IFooterState {

}

export default class Footer extends React.Component<IFooterProps, IFooterState> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return <nav className="navbar navbar-light bg-light">
            <div className={"container"}>
                <a className="navbar-brand" href="#">Copyright@2018 Phuoc</a>
            </div>
        </nav>;
    }
}