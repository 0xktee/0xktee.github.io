import React, { createContext, useState } from 'react';

export const SplashContext = createContext();

const SplashProvider = ({ children }) => {
  const [isSplashFinish, setSplashFinish] = useState(false);

  return (
    <SplashContext.Provider value={{ isSplashFinish, setSplashFinish }}>
      {children}
    </SplashContext.Provider>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ element }) => <SplashProvider>{element}</SplashProvider>;
