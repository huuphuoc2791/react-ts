import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import SlideCarousel from "./dashboard/SlideCarousel";
import List from "./dashboard/List";
import {Info} from "./dashboard/Info";
import {Tabs} from "./dashboard/Tabs";

interface IDashboardProps {
    // defaultPropsValue: object;
}

interface IDashboardState {
    name: string;
    status: string;
    persons: any[]

}
const api = 'https://jsonplaceholder.typicode.com/users';

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props: IDashboardProps) {
        super(props);
        this.state = {name: '', status: '',persons:[]}
    }
    componentDidMount() {
        const main = this;
        fetch(api).then(result => {
            return result.json();
        }).then(response => {
            main.setState({
                persons: response
            });
        }).catch(reason => {
                console.log('Error when loading', reason)
            }
        )
    }
    parentCallback = () => {
        return this.state.persons;
    }

    render() {
        const {persons} = this.state;
        let name = "Phuoc";
        return [
            <SlideCarousel key={"eew"}/>,
            <div className={"form-group mt-4"} key={"sds"}>
                <input className={"form-control btn btn-info mb-2"}
                       type="text" placeholder={"Please enter input"}/>
                <List name={name} age={28} callBackfromParent={this.parentCallback}/>
            </div>,
            <Info key={"4"}/>,
            <Tabs key={"3"}/>
        ];
    }

}

