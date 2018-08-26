import * as React from "react";
import * as classnames from "classnames";
import GoogleLoginAuth from "./LoginSocialAuth";

interface IContactProps {

}

interface IContactState {

}

export default class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return <div><GoogleLoginAuth></GoogleLoginAuth></div>;
    }
}