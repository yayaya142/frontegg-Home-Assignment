import './App.css';
import {useEffect} from 'react'

import { ContextHolder } from '@frontegg/rest-api';
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user
  const handleClick = () => {
    AdminPortal.show()
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className='card'>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className='header'>
            <span className="heading">Welcome, {user?.name}!</span>
            </div>
            <div className="underHeader">
              We're glad to have you back
              </div>
          <div className="detail">
            <span className="heading">Email: {user?.email}</span>
          </div>
          <div>
            <button
            onClick={() => logout()}
            className="button">Logout</button>
            <button
            onClick={() => handleClick()}
            className="button">Settings</button>
          </div>
        </div>
      ): 
      (
        <div>
        <button 
        onClick={() => loginWithRedirect()}
        className="button">
        Login
        </button>
        </div>
      ) }
    </div>
  );
}

export default App;