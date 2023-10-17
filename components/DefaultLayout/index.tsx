import React, { Fragment, ReactNode } from 'react'
import { AppShell } from '@mantine/core'
import { motion } from 'framer-motion'

import { useSplash } from '../../contexts/SplashContext'

import Menubar from '../Menubar'
import Footer from '../Footer'
import Splash from '../Splash'
import LeftBar from '../LeftBar'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { splashFinished } = useSplash()

  return (
    <Fragment>
      {splashFinished ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: 'easeIn',
          }}
        >
          <AppShell padding={0} navbarOffsetBreakpoint="sm" navbar={<LeftBar />}>
            <Menubar />
            {children}
          </AppShell>
        </motion.div>
      ) : (
        <Splash />
      )}
    </Fragment>
  )
}
