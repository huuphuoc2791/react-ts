import {observable, computed} from "mobx";
import * as React from "react";
import "assets/info.scss";

export class Info extends React.Component {
    price = 10;
    amount = 1;

    get total() {
        return this.price * this.amount;
    }

    render() {
        return [
            <div className={"abc"} key={"1"}> This value is: {this.total}
                <div className={"alert alert-primary"} role="alert">
                    This is a primary alert—check it out!
                </div>
            </div>,
            <div className="jumbotron" key={"2"}>
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>,
        ];
    }
}
