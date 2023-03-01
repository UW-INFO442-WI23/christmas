/* This file contains the code for log out  */
'use strict';
import React from 'react';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export function LogOut(props) {
  const { loggedIn } = props;
  const navigate = useNavigate();
  const auth = getAuth();
  // sign out and navigate

  useEffect(() => {
    const signout = () => {
      signOut(auth).then(() => {
        return window.location.href = "/";
  
      }).catch((error) => {});
    }
    if(!loggedIn) {
      return window.location.href = "/";
    } else {
      console.log(loggedIn, 'useEffect')
      console.log(signout, 'useEffect')
      signout();  
      return window.location.href = "/";
    };
  }, [loggedIn])

  return (
    <div className="container">
    </div>
  );
}