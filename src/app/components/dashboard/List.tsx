import {observable, computed} from "mobx";
import * as React from "react";
import Select, {Options} from "react-select";
import 'react-select/dist/react-select.css';
import * as _ from 'lodash';
import * as classNames from 'classnames';

const api = 'https://jsonplaceholder.typicode.com/users';

interface IDashboardProps {
    age: number;
    name: string;
    callBackfromParent: any;
}

interface IDashboardState {
    selectedOption: any;
    infoStatus: string;
    mode: string;

}

export default class List extends React.Component<IDashboardProps, IDashboardState> {
    constructor(props: IDashboardProps) {
        super(props);
        this.state = {
            selectedOption: {label: '', value: ''},
            infoStatus: '',
            mode: ''
        }
    }

    handleChange(selectedOption: any) {
        this.setState({selectedOption: selectedOption});
        console.log(`Selected: ${selectedOption.label}`);
    }


    identity<T>(arg: T): T {
        return arg;
    }

    findInfoUserByID(id: number) {
        let persons: any[] = this.props.callBackfromParent();
        let result = persons.filter(person => person.id == id);
    }

    findInfoUserByName(name: string) {
        let httpText = "http://www.";
        let persons: any[] = this.props.callBackfromParent();
        let result: any = persons.filter(person => person.name == name);
        if (result.length == 0) return <div></div>
        return <div>
            {result[0].name}({result[0].username}) -
            website: <a target={"_blank"} href={httpText + result[0].website}>{httpText + result[0].website}</a> -
            company: <b>{result[0].company.name} </b> - address: {result[0].address.street}, {result[0].address.suite}, {result[0].address.city}
        </div>
    }

    componentDidMount() {
        const self = this;

    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // console.log("Did updated:", prevState);
        // this.findInfoUserByID(2);

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
        // return this.props === nextProps;
        return true;
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
        let {selectedOption} = this.state;
        let persons = this.props.callBackfromParent();
        let list = persons && persons.map((item: any) => {
            return {value: item.username, label: item.name};
        })
        let value = selectedOption && selectedOption.value;
        return [
            <Select
                key={"212"}
                name="select-form"
                placeholder={"Please select your customer"}
                onChange={this.handleChange.bind(this)}
                value={value}
                options={list}/>,
            <div key={"33"} className={classNames('person mt-2 mb-2', this.state.mode)}>
                <div>MVP: {this.props.name}-{this.props.age}</div>
                <div>{this.findInfoUserByName(selectedOption.label)}</div>
            </div>,
            <div key={"eee"}>
                <button className="btn btn-primary"
                        type="button"
                        data-toggle="collapse"
                        data-target="#getListPersons"
                        aria-expanded="false"
                        aria-controls="getListPersons">
                    Get List
                </button>
                <div className="collapse" id="getListPersons">
                    <h5 className={"mb-2 mt-2"}>List of Person</h5>
                    <div className="card card-body">
                        <ul>{this.getList()}</ul>
                    </div>
                </div>
            </div>
        ];
    }
}
