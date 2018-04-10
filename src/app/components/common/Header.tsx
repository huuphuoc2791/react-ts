import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
} from 'react-router-dom';
import Dashboard from "./Dashboard";
import About from "./About";

export default class Header extends React.Component <any, any> {

    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className={"container"}>
                    <Link className="nav-link" to="/">HomePage</Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item active">
                                {/*<a className="nav-link" href="#">Home </a>*/}
                                <Link className="nav-link"
                                      to="/home">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="#">About</a>*/}
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle"
                                   href="#"
                                   id="navbarDropdown"
                                   role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true"
                                   aria-expanded="false">
                                    Details
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                {/*<a className="nav-link" href="/contact">Contact</a>*/}
                                <Link className="nav-link" to="/contact">Contact</Link>

                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2"
                                   type="search"
                                   placeholder="Search"
                                   aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


        );
    }
}
