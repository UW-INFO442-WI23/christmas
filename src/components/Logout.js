/* This file contains the code for log out  */
'use strict';
import React from 'react';
import {getAuth, signOut} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

export function LogOut() {
  const navigate = useNavigate();
  const auth = getAuth();
  // sign out and navigate
  const signout = () => {
    signOut(auth).then(() => {
      return navigate('/');
    }).catch((error) => {});
  };

  return (
    <div className="container">
        <section className="row header-content align-items-center">
            <div className='logout'>
                <button onClick={signout}>Logout</button>
            </div>
        </section>
    </div>
  );
}