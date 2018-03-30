import {observable, computed} from "mobx";
import * as React from "react";
import Select, {Options} from "react-select";
import 'react-select/dist/react-select.css';
import * as _ from 'lodash';
import {Model} from "../models/Model";
import * as classNames from 'classnames';

const api = 'https://jsonplaceholder.typicode.com/users';


export default class List extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            persons: [],
        }
    }

    handleChange(selectedOption: any) {
        this.setState({selectedOption});
        console.log(`Selected: ${selectedOption.label}`);
    }

    componentDidMount() {
        const self = this;
        fetch(api).then(result => {
            return result.json();
        }).then(response => {
            self.setState({
                persons: response,
            });
        }).catch(reason => {
                self.setState({infoStatus: 'error'});
                console.log('Error when loading')
            }
        )
        console.log("Did mounted: ", this.state)
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        console.log("Did updated:", prevState);
    }

    componentDidCatch() {
        console.log("Did catch: ", this.state);
    }

    componentWillUnmount() {
        console.log("Will unmounted:", this.state);
    }

    componentWillUpdate(nextProps: any, nextState: any) {
        console.log("Will updated:", this.state);
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
        console.log("Will mounted:", this.state);
    }

    componentWillReceiveProps() {
        console.log("Will recieve props:", this.props);
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("Should Update", nextState, nextProps);

        // if (!_.isEqual(nextState.persons,this.state.persons)) {
        //     return true;
        // }
        // return false;
        return true;

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
            <div>{ value}</div>
        </div>];
    }
}
