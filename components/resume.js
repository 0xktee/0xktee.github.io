import React from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Box } from '@material-ui/core'

const Resume = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Box
        display="flex"
        className="box box-default"
        justifyContent="center"
        alignItems="center"
      >
        work in progress, will be update soon! 👨‍💻
      </Box>
    </LazyMotion>
  )
}

export default Resume
