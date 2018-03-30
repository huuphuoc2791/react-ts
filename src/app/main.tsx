import {observer} from "mobx-react";
import * as classNames from "classnames";
import * as React from "react";
import * as ReactDOM from "@types/react-dom";
import {Model} from "./models/Model";
import {Info} from "./components/Info";
import {Button} from "reactstrap";
import Header from "./components/Header";
import {Tabs} from "./components/Tabs";
import "assets/style.scss";
import List from "./components/List";

const api = 'https://jsonplaceholder.typicode.com/users';

export class main extends React.Component {

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
        const {persons, infoStatus} = this.state;

        var test = persons.map(function (item: any) {
            return <option key={item.id}>{item.username}</option>
        })

        return [
            <Header key={"1"}/>,
            <div key={"2"}>
                <input className={"btn"}
                       type="text"/>
                <select>{test}</select>
                <Button color="danger">Danger!</Button>
                <List name={"Phuoc"} age={30}/>
            </div>,
            <Info key={"4"}/>,
            <Tabs key={"3"}/>];


    }
}