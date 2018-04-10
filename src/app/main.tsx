import {observer} from "mobx-react";
import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/common/Header";
import "assets/style.scss";
import Dashboard from "./components/Dashboard";
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink,Switch
} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";

const api = 'https://jsonplaceholder.typicode.com/users';

export class main extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    componentDidMount() {
        const main = this;
        fetch(api).then(result => {
            return result.json();
        }).then(response => {
            main.setState({
                persons: response
            });
            main.setState({infoStatus: 'loaded'});
        }).catch(reason => {
                main.setState({infoStatus: 'error'});
                console.log('Error when loading', reason)
            }
        )
    }

    render() {
        return [
            <Header key={"1"}/>,
            <div className={"container content"} key={"2"}>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/' component={Dashboard}/>
                    <Route path='/home' component={Dashboard}/>
                    <Route component={Dashboard}/>
                </Switch>

            </div>];
    }
}