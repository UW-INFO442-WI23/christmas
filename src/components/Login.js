import React from 'react';
import { redirect } from 'react-router-dom';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';


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
        return <StyledFireBaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>;
    }
    
}
export default Login;