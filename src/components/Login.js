/* This file contains the code login page */
'use strict';
import React from 'react';
import { redirect } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Footer from "./Footer";
import loginImage from "../img/login-image.png"

// using the firebase UI config
const firebaseUIConfig = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            window.location.href = "/";
        }
    }
}
// after loggin in, redirect
function Login(props) {
    const auth = getAuth();
    if(props.loggedIn) {
        window.location.href = "/";
    } else {
        return (
            <>
                <main>
                    <div className="container">
                        <div className="content header-content">
                            <section className="row header-content align-items-center">
                                <h1 className='login-header'>Welcome to Sleep & See</h1>
                                <StyledFireBaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
                            </section>
                        </div>
                        <div className="content login-image-sec">
                            <img className="login-image" src={loginImage} alt='graph'></img>
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        );
    }
    return redirect("/");
    
}
export default Login;