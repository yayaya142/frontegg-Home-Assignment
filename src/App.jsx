import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

import { ContextHolder } from "@frontegg/rest-api";
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {
  const [count, setCount] = useState(0);

  // Frontegg configuration
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.for().getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  // admin user
  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="card">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Name: {user?.email}</span>
          </div>
          <div>
            <button onClick={() => logout()} className="button">
              Logout
            </button>
            <button onClick={() => handleClick()} className="button">
              View Full Admin Portal
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()} className="login-button">
            click here to login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
