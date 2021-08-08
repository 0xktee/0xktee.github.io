import React, { createContext, useState } from 'react'

export const SplashContext = createContext()

const SplashProvider = (props) => {

  // set splash when enter index page
  const [isSplashFinish, setSplashFinish] = useState(
    window.location.pathname === '/' ? false : true
  )

  return (
    <SplashContext.Provider value={{ isSplashFinish, setSplashFinish }}>
      {props.children}
    </SplashContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ element }) => <SplashProvider>{element}</SplashProvider>
