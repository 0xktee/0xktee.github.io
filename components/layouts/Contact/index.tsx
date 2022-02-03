import React, { useEffect, FC, useState } from 'react'

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Tooltip,
} from '@mui/material'
import {
  Twitter,
  Linkedin,
  Github,
  Medium,
  Discord,
  Buymeacoffee,
} from '@icons-pack/react-simple-icons'

import ParallaxIcon from '../../ParallaxIcon'
import CoffeeIcon from '../../../assets/coffee.svg'
import WrenchIcon from '../../../assets/wrench.svg'

const componentMapping: any = {
  Twitter,
  Linkedin,
  Github,
  Medium,
  Discord,
  Buymeacoffee,
}

const Contact: FC = () => {
  const [isCopy, setIsCopy] = useState(false)

  const copyTextToClipboard = (text: any) => {
    navigator.clipboard.writeText(text)
    setIsCopy(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false)
    }, 3000)
  }, [isCopy])

  const IconSocial = ({ icon, href }: any) => {
    const Component = componentMapping[icon]

    return (
      <Grid xs={6} sm={4} item>
        <a href={href} target="_blank" rel="noreferrer">
          <Card variant="outlined" className="social-card">
            <CardContent className="social-container">
              <Component className="icon-social" />
              <Typography className="text-social">{icon}</Typography>
            </CardContent>
          </Card>
        </a>
      </Grid>
    )
  }

  return (
    <Box
      id="contact"
      display="flex"
      className="box box-default dark-background"
      alignItems="center"
    >
      <ParallaxIcon
        offset={150}
        src={CoffeeIcon}
        size="80px"
        top="15%"
        right="20%"
        style={{ rotate: -7 }}
      />

      <ParallaxIcon
        src={WrenchIcon}
        size="90px"
        bottom="20%"
        right="7%"
        style={{ rotate: -15 }}
      />

      <Grid justifyContent="center" container>
        <Grid xs={11} md={10} spacing={2} container>
          <Grid xs={12} item>
            <Typography component="h2" variant="h2">
              Get In Touch
            </Typography>
            <Typography component="p" variant="body1">
              If you have something to discuss, please feel free to contact me
              anytime.
            </Typography>
          </Grid>

          <IconSocial
            icon="Linkedin"
            href="https://www.linkedin.com/in/knwch"
          />

          <IconSocial icon="Github" href="https://github.com/knwch" />

          <IconSocial icon="Medium" href="https://medium.com/@knwch" />

          <Grid xs={12} item>
            <Typography component="h3" className="email-header">
              Email
            </Typography>
            <Tooltip title={isCopy ? 'Copied' : 'Copy to Clipboard'}>
              <Typography
                component="p"
                onClick={() => copyTextToClipboard('korrawich.kho@gmail.com')}
                className="email-text"
              >
                korrawich.kho@gmail.com
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
