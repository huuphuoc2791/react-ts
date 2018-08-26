import {observer} from "mobx-react";
import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "assets/styles/style.scss";
import Dashboard from "./components/Dashboard";
import * as $ from "jquery";
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink, Switch
} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";

const api = 'https://jsonplaceholder.typicode.com/users';

export class main extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

        $.ajax(api).then((data) => {
        })
    }


    render() {
        return [
            <Header key={"1"}/>,
            <div className={"container content"} key={"2"}>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/' component={Dashboard} extra/>
                    <Route path='/home' component={Dashboard}/>
                    <Route path='*' component={Dashboard}/>
                </Switch>
            </div>,
            <Footer key={"eerr"}/>];
    }
}