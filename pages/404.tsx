import React, { useRef, useEffect } from 'react'
import { Box, Grid, Button } from '@mui/material'
import Link from 'next/link'
import lottie from 'lottie-web'
import Layout from '../components/layout'

import lonely from '../assets/lottiefiles/36395-lonely-404.json'

import '../styles/404.scss'

const NotFoundPage = () => {
  const animation404Container = useRef()

  useEffect(() => {
    lottie.setQuality('low')
    lottie.loadAnimation({
      container: animation404Container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lonely,
      rendererSettings: {
        progressiveLoad: true,
      },
    })

    return () => {
      lottie.destroy()
    } // optional clean up for unmounting
  }, [])

  return (
    <Layout>
      <Box
        display="flex"
        className="box box-first"
        alignItems="center"
        justifyContent="center"
      >
        <Grid justify="center" alignItems="center" container>
          <Grid item xs={10} sm={6} md={4} align="center">
            <div ref={animation404Container}></div>
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              className="notfound-button"
            >
              Back to main page
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default NotFoundPage
