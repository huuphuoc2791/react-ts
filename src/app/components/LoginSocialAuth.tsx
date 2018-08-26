import * as React from "react";
import * as classnames from "classnames";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {Redirect} from 'react-router-dom';

interface ILoginSocialAuthProps {

}

interface ILoginSocialAuthState {
    loginError: boolean;
    redirect: boolean;
    data: any;
    loginStatus: string;
}

export default class LoginSocialAuth extends React.Component<ILoginSocialAuthProps, ILoginSocialAuthState> {

    constructor(props: any) {
        super(props);
        this.state = {
            loginError: false,
            redirect: false,
            data: {},
            loginStatus: '',
        };
        this.signup = this.signup.bind(this);
    }

    postData = {
        name: '',
        provider: '',
        email: '',
        provider_id: '',
        token: '',
        provider_pic: ''
    }

    signup(res: any, type: any) {
        if (type === 'google' && res.w3.U3) {
            this.postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }
        if (type === 'facebook' && res.email) {
            this.postData = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }
    }

    responseGoogle = (response: any) => {
        console.log("google console");
        console.log(response);

        this.signup(response, 'google');
        this.setState({loginStatus: "Login google success"});
    }
    responseFacebook = (response: any) => {
        console.log("facebook console");
        console.log(response);
        this.signup(response, 'facebook');
        this.setState({loginStatus: "Login facebook success"});
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        let name = 'Test'
        // console.log("Data: ", this.state.data);
        // console.log("Post Data: ", this.postData);
        return <div>
            <GoogleLogin
                clientId="47405450813-irj2vpqoppct2dgro30eupl5p335fk9j.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle.bind(this)}
                onFailure={this.responseGoogle.bind(this)}/>
            <FacebookLogin
                appId="2402128546479308"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook.bind(this)}/>
            Name:{this.postData.name}
        </div>;
    }
}
