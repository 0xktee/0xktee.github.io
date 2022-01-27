import React, { createContext, useContext, useState, ReactNode } from 'react'

type splashContextType = {
  isSplashFinish: boolean
  setSplashFinish: () => void
}

const splashContextDefaultValues: splashContextType = {
  isSplashFinish: false,
  setSplashFinish: () => {},
}

const SplashContext = createContext<splashContextType>(
  splashContextDefaultValues
)

export function useSplash() {
  return useContext(SplashContext)
}

type Props = {
  children: ReactNode
}

export function SplashProvider({ children }: Props) {
  const [isSplashFinish, setIsSplashFinish] = useState<boolean>(false)

  const setSplashFinish = () => {
    setIsSplashFinish(true)
  }

  const value = {
    isSplashFinish,
    setSplashFinish,
  }

  return (
    <>
      <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
    </>
  )
}

// const SplashProvider = (props: {
//   children:
//     | boolean
//     | React.ReactChild
//     | React.ReactFragment
//     | React.ReactPortal
//     | null
//     | undefined
// }) => {
//   const [isSplashFinish, setSplashFinish] = useState(false)

//   return (
//     <SplashContext.Provider value={{ isSplashFinish, setSplashFinish }}>
//       {props.children}
//     </SplashContext.Provider>
//   )
// }

// // eslint-disable-next-line import/no-anonymous-default-export
// export default ({ element }) => <SplashProvider>{element}</SplashProvider>
