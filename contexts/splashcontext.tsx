import React, { createContext, useState } from 'react'

export const SplashContext = createContext()

const SplashProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  const [isSplashFinish, setSplashFinish] = useState(false)

  return (
    <SplashContext.Provider value={{ isSplashFinish, setSplashFinish }}>
      {props.children}
    </SplashContext.Provider>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ element }) => <SplashProvider>{element}</SplashProvider>
