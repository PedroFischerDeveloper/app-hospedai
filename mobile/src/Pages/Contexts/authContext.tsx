import {useState} from 'react';
import constate from 'constate';

const [AuthProvider, useAuth] = constate(() => {
  const [auth, setAuth] = useState<boolean>(false);

  return {
    auth,
    setAuth,
  };
});

export {AuthProvider};

export default useAuth;
