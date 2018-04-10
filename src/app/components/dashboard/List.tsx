import {observable, computed} from "mobx";
import * as React from "react";
import Select, {Options} from "react-select";
import 'react-select/dist/react-select.css';
import * as _ from 'lodash';
import {Model} from "../models/Model";
import * as classNames from 'classnames';
import {Person} from "../models/Person";

const api = 'https://jsonplaceholder.typicode.com/users';

interface IDashboardProps {
    age: number;
    name: string;
    callBackfromParent: any;
}

interface IDashboardState {
    persons: string[];
    selectedOption: any;
    infoStatus: string;
    mode: string;

}

export default class List extends React.Component<IDashboardProps, IDashboardState> {
    constructor(props: IDashboardProps) {
        super(props);
        this.state = {
            persons: [],
            selectedOption: {label: '', value: ''},
            infoStatus: '',
            mode: ''
        }
    }

    handleChange(selectedOption: any) {
        this.setState({selectedOption: selectedOption});
        console.log(`Selected: ${selectedOption.label}`);
    }

    public handleOnClick(event: any): void {
        console.log("Click", event);
    }

    identity<T>(arg: T): T {
        return arg;
    }

    componentDidMount() {
        const self = this;
        fetch(api).then(result => {
            return result.json();
        }).then(response => {
            self.setState({
                persons: response,
                infoStatus: 'success'
            });
        }).catch(reason => {
                self.setState({infoStatus: 'error'});
                console.log('Error when loading')
            }
        )
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // console.log("Did updated:", prevState);
    }

    componentDidCatch() {
        // console.log("Did catch: ", this.state);
    }

    componentWillUnmount() {
        // console.log("Will unmounted:", this.state);
    }

    componentWillUpdate(nextProps: any, nextState: any) {
        // console.log("Will updated:", this.state);
    }

    componentWillMount() {
        let mode;
        if (this.props.age > 70) {
            mode = 'old';
        } else if (this.props.age < 18) {
            mode = 'young';
        } else {
            mode = 'middle';
        }
        this.setState({mode});
        // console.log("Will mounted:", this.state);
    }

    componentWillReceiveProps() {
        // console.log("Will recieve props:", this.props);
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        // console.log("Should Update", nextState, nextProps);

        // if (!_.isEqual(nextState.persons,this.state.persons)) {
        //     return true;
        // }
        return this.props === nextProps;
        // return true;

    }

    private getList = () => {
        let persons = this.props.callBackfromParent();
        let httpText = 'http://www.';
        let list = persons && persons.map((item: any) => {
            return <li key={item.id}>{item.name} ({item.username}) -
                website: <a target={"_blank"} href={httpText + item.website}>{httpText + item.website}</a> -
                company: <b>{item.company.name}</b></li>
        });
        return list;
    }

    render() {
        console.log("Render: ", this.state);
        let {persons, selectedOption} = this.state;
        let list = persons && persons.map((item: any) => {
            return {value: item.username, label: item.name};
        })
        let value = selectedOption && selectedOption.value;
        return [<Select
            key={"212"}
            name="select-form"
            placeholder={"Please select your customer"}
            onChange={this.handleChange.bind(this)}
            value={value}
            options={list}
        />, <div key={"33"} className={classNames('person', this.state.mode)}>
            {this.props.name} (age: {this.props.age})
            <div onClick={e => this.handleOnClick(e)}>{value}</div>
            <div>
                <ul>{this.getList()}</ul>
            </div>
        </div>];
    }
}
