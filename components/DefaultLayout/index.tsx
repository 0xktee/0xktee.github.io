import React, { Fragment, ReactNode } from 'react'

import { useSplash } from '../../contexts/splashcontext'

import Menubar from '../Menubar'
import Footer from '../Footer'
import Splash from '../Splash'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isSplashFinish } = useSplash()

  return (
    <Fragment>
      {isSplashFinish ? (
        <Fragment>
          <Menubar />
          {children}
          <Footer />
        </Fragment>
      ) : (
        <Splash />
      )}
    </Fragment>
  )
}
