import React, { useRef, useEffect, FC } from 'react'
import Image from 'next/image'

import { Link as LinkScroll } from 'react-scroll'
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { Typography, Box, Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import dayjs from 'dayjs'
import lottie from 'lottie-web'

import ParallaxIcon from '../../ParallaxIcon'
import me from '../../../assets/lottiefiles/lf30_sxl9smmj.json'
import CodingIcon from '../../../assets/coding.svg'
import BlocksIcon from '../../../assets/blocks.svg'
import HexagonIcon from '../../../assets/hexagon.svg'

const useStyles = makeStyles((theme) => ({
  lottieContainer: {
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },

    '& div': {
      zIndex: 1,
      position: 'relative',
      marginRight: 48,
      padding: 24,
      [theme.breakpoints.down('md')]: {
        marginRight: 24,
        padding: 8,
      },
    },
  },
}))

const Introduce: FC = () => {
  const classes = useStyles()
  const animationContainer = useRef<HTMLDivElement>(null)
  // const constraintsRef = useRef()

  useEffect(() => {
    lottie.setQuality('low')
    lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: me,
      rendererSettings: {
        progressiveLoad: true,
      },
    })

    return () => {
      lottie.destroy()
    }
  }, [])

  const getGreetingTime = (dayjs: dayjs.Dayjs) => {
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
    <Box
      id="introduce"
      display="flex"
      className="box box-first dark-background"
      // ref={constraintsRef}
    >
      <ParallaxIcon
        src={CodingIcon}
        size="100px"
        bottom="25%"
        left="5%"
        style={{ rotate: -8 }}
      />

      <ParallaxIcon
        offset={35}
        src={BlocksIcon}
        size="90px"
        top="15%"
        right="5%"
        style={{ rotate: 4 }}
      />

      <ParallaxIcon
        offset={100}
        src={HexagonIcon}
        size="80px"
        bottom="20%"
        right="8%"
        style={{ rotate: 24 }}
      />

      <Grid justifyContent="center" alignItems="center" container>
        <Grid className={classes.lottieContainer} item sm={4} md={3}>
          <motion.div
            ref={animationContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { ease: 'circIn', duration: 1 },
            }}
          ></motion.div>
        </Grid>
        <Grid item xs={10} sm={5} md={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeIn',
            }}
          >
            <Typography component="p" variant="body1">
              Good {getGreetingTime(dayjs())}, I&apos;m
            </Typography>

            {/* <div id="nick-name">tee.</div> */}

            <Typography component="h1" variant="h1">
              Korrawich
            </Typography>

            <Typography className="secondary" component="p" variant="body1">
              /korrawich khosripetch/
            </Typography>

            <Typography component="p" variant="body1">
              I&apos;m a <span id="role">developer</span> who loves making
              interesting things. I&apos;m based in Bangkok, Thailand.
            </Typography>
            <LinkScroll to="contact" spy={true} smooth={true} duration={500}>
              <Button variant="contained" size="large" className="reach-button">
                Reach me
              </Button>
            </LinkScroll>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Introduce
