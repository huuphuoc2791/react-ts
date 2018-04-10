import {Base} from "./Base";

export class Person extends Base {
    name: string = '';
    address: any = '';

    static createFromDataModel(dataModel: any): Person {
        const person = new Person();
        person.name = dataModel.name;
        return person;
    }
}