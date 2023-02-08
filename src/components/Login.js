import React from 'react';
import { redirect } from 'react-router-dom';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Footer from "./Footer";
import loginImage from "../img/login-image.svg"


const firebaseUIConfig = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false;
        }
    }
}
function Login(props) {
    const auth = getAuth();
    if(props.loggedIn) {
        return redirect("/");
    } else {
        return (
            <>
                <div className="container header-content">
                <section className="row header-content align-items-center">
                    <h1 className='login-header'>Welcome to Sleep & See</h1>
                    <StyledFireBaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
                </section>
            </div>
            <Footer/>
            </>
        );
    }
    
}
export default Login;