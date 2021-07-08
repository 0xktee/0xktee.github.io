import React, { useRef, useEffect } from 'react'
import { Typography, Box, Grid, Button, makeStyles } from '@material-ui/core'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import scrollTo from 'gatsby-plugin-smoothscroll'
import dayjs from 'dayjs'
import lottie from 'lottie-web'
import medi from '../assets/lottiefiles/57088-no-ads.json'

import '../styles/introduce.scss'

const useStyles = makeStyles((theme) => ({
  lottieContainer: {
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
}))

const Introduce = () => {
  const classes = useStyles()
  const animationContainer = useRef()
  const constraintsRef = useRef()

  useEffect(() => {
    lottie.setQuality('low')
    lottie
      .loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: medi,
        rendererSettings: {
          viewBoxSize: '410 0 1080 1080',
          progressiveLoad: true,
        },
      })
      .setSpeed(0.85)

    return () => {
      lottie.destroy()
    } // optional clean up for unmounting
  }, [])

  const getGreetingTime = (dayjs) => {
    let greetingWord = null // return greetingWord

    if (!dayjs || !dayjs.isValid()) {
      return
    } // if we can't find a valid or filled moment, we return.

    const splitAfternoon = 12 // 24hr time to split the afternoon
    const splitEvening = 17 // 24hr time to split the evening
    const splitLateEvening = 3
    const currentHour = parseFloat(dayjs.format('HH'))

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      greetingWord = 'afternoon'
    } else if (currentHour >= splitEvening || currentHour <= splitLateEvening) {
      greetingWord = 'evening'
    } else {
      greetingWord = 'morning'
    }

    return greetingWord
  }

  return (
    <LazyMotion features={domAnimation}>
      <Box
        display="flex"
        className="box box-first dark-background"
        ref={constraintsRef}
      >
        <Grid
          justify="center"
          alignItems="center"
          className="padding-content"
          container
        >
          <Grid className={classes.lottieContainer} item sm={4} md={3}>
            <m.div
              style={{
                zIndex: 1,
                position: 'relative',
                marginRight: 64,
              }}
              ref={animationContainer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { ease: 'circIn', duration: 1 },
              }}
              whileTap={{ scale: 0.95 }}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.75}
            >
              <svg
                height="100%"
                width="100%"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
                overflow="visible"
              >
                <circle cx="50%" cy="50%" r="42.5%" fill="white" />
                <text
                  x="-5%"
                  y="20%"
                  fill="#f4f4f4"
                  transform="translate(0, 0) rotate(-30)"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  drag me!
                </text>
              </svg>
            </m.div>
          </Grid>

          <Grid item xs={10} sm={5} md={4}>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: 'easeIn',
              }}
            >
              <Typography className="hello-typo" variant="span">
                Good {getGreetingTime(dayjs())} 👋 , I'm
              </Typography>

              <div id="nick-name">tee.</div>

              <Typography className="info-typo" variant="span">
                /korrawich khosripetch/
              </Typography>

              <Typography className="describe-typo" variant="span">
                I'm a <span id="role">developer</span> who loves making
                interesting things. I'm based in Bangkok, Thailand, Planet
                Earth. 🦄
              </Typography>
              <Button
                onClick={() => scrollTo('#contact')}
                variant="contained"
                size="large"
                className="reach-button"
                // component={m.button}
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
              >
                Reach me
              </Button>
            </m.div>
          </Grid>
        </Grid>
      </Box>
    </LazyMotion>
  )
}

export default Introduce
