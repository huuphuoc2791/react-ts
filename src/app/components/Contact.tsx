import * as React from "react";
import * as classnames from "classnames";
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';

interface IContactProps {

}

interface IContactState {

}

export default class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return <div>Contact Component</div>;
    }
}