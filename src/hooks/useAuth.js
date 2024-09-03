import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username });
    // Simulate saving to local storage or making an API call
    localStorage.setItem('user', JSON.stringify({ username }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;
