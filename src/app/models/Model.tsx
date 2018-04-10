import {observable, computed} from "mobx";
import _ from "lodash";
import {Base} from "./Base";

export class Model extends Base {
    persons = [];

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(result => {
            return result.json();
        }).then(data => {
            console.log(data)
            _.assign(this.persons, data)
            // this.persons = data;
        })
        console.log(this.persons);
    }
}

const Auth = () => {

}