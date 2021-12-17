import React, {useState} from 'react';
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './sign-in.styles.scss';

const Signin = (props) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const {dispatchEmailSignInStart, dispatchGoogleSignInStart} = props;

    const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = userCredentials;
        dispatchEmailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value});
    }

    return <div className={'sign-in'}>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput name={"email"} type={'email'} value={userCredentials.email} handleChange={handleChange}
                       required label={"Email"}/>
            <FormInput name={"password"} type={'password'} value={userCredentials.password}
                       handleChange={handleChange} required label={"Password"}/>

            <div className={'buttons'}>
                <CustomButton type={'submit'}>Sign In</CustomButton>
                <CustomButton type={'button'} onClick={dispatchGoogleSignInStart}>Sign In With Google</CustomButton>
            </div>
        </form>
    </div>
}

const mapDispatchToProps = dispatch => ({
    dispatchGoogleSignInStart: () => dispatch(googleSignInStart()),
    dispatchEmailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});


export default connect(null, mapDispatchToProps)(Signin);