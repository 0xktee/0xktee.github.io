import React, { Fragment, ReactNode } from 'react'

import { useSplash } from '../../contexts/SplashContext'

import Menubar from '../layouts/Menubar'
import Footer from '../layouts/Footer'
import Splash from '../Splash'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { splashFinished } = useSplash()

  return (
    <Fragment>
      {splashFinished ? (
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
