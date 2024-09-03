import React from 'react';
import useAuth from './hooks/useAuth';

const Auth = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => login('JohnDoe')}>Login as JohnDoe</button>
        </>
      )}
    </div>
  );
};

export default Auth;
