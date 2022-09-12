import React, { createContext, useContext, useState, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type splashContextType = {
  splashFinished: boolean
  setSplashFinish: () => void
}

const splashContextDefaultValues: splashContextType = {
  splashFinished: false,
  setSplashFinish: () => {},
}

const SplashContext = createContext<splashContextType>(splashContextDefaultValues)

export function useSplash() {
  return useContext(SplashContext)
}

export function SplashProvider({ children }: Props) {
  const [splashFinished, setSplashFinished] = useState<boolean>(false)

  const setSplashFinish = () => {
    setSplashFinished(true)
  }

  const value = {
    splashFinished,
    setSplashFinish,
  }

  return (
    <>
      <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
    </>
  )
}
