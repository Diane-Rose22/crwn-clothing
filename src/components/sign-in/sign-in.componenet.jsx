import React from 'react';
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './sign-in.styles.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        const {dispatchEmailSignInStart} = this.props;

        dispatchEmailSignInStart(email, password);
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {dispatchGoogleSignInStart} = this.props;
        return <div className={'sign-in'}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name={"email"} type={'email'} value={this.state.email} handleChange={this.handleChange}
                           required label={"Email"}/>
                <FormInput name={"password"} type={'password'} value={this.state.password}
                           handleChange={this.handleChange} required label={"Password"}/>

                <div className={'buttons'}>
                    <CustomButton type={'submit'}>Sign In</CustomButton>
                    <CustomButton type={'button'} onClick={dispatchGoogleSignInStart}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchGoogleSignInStart: () => dispatch(googleSignInStart()),
    dispatchEmailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});


export default connect(null, mapDispatchToProps)(Signin);