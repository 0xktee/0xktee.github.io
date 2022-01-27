import React, { Fragment, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion, useCycle } from 'framer-motion'
import { Link as LinkScroll } from 'react-scroll'
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { sidebar, ulvariants, livariants } from './variants'
import Logo from '../../assets/logo-plain.svg'

const MenuBar: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  const renderDesktopMenu = (
    <div className="desktop-section">
      <List component={Stack} direction="row">
        <ListItem dense>
          <ListItemText
            primary={
              <LinkScroll to="projects" spy={true} smooth={true} duration={500}>
                <span>Projects</span>
              </LinkScroll>
            }
          />
        </ListItem>

        <ListItem dense>
          <ListItemText
            primary={
              <a
                href="https://linkedin.com/in/knwch/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            }
          />
        </ListItem>

        <ListItem dense>
          <ListItemText
            primary={
              <a
                href="https://github.com/knwch"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            }
          />
        </ListItem>
      </List>
    </div>
  )

  const renderMobileMenu = (
    <div className="mobile-section">
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.div className="tab-background" variants={sidebar} />
        <List component={motion.ul} variants={ulvariants}>
          <LinkScroll to="projects" spy={true} smooth={true} duration={500}>
            <ListItem
              component={motion.li}
              variants={livariants}
              whileTap={{ scale: 0.95 }}
            >
              <ListItemText primary="Projects" />
              <FontAwesomeIcon icon={faBook} className="end-icon" size="lg" />
            </ListItem>
          </LinkScroll>

          <a
            href="https://www.linkedin.com/in/knwch"
            target="_blank"
            rel="noreferrer"
          >
            <ListItem
              component={motion.li}
              variants={livariants}
              whileTap={{ scale: 0.95 }}
            >
              <ListItemText primary="LinkedIn" />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="end-icon"
                size="lg"
              />
            </ListItem>
          </a>

          <a href="https://github.com/knwch" target="_blank" rel="noreferrer">
            <ListItem
              component={motion.li}
              variants={livariants}
              whileTap={{ scale: 0.95 }}
            >
              <ListItemText primary="Github" />
              <FontAwesomeIcon icon={faGithub} className="end-icon" size="lg" />
            </ListItem>
          </a>
        </List>
        <IconButton
          component={motion.div}
          whileTap={{ scale: 0.8 }}
          className="tab-icon"
          onClick={() => toggleOpen()}
          disableRipple={true}
          id="menutab"
        >
          <svg width="26" height="26" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="#181818"
              strokeLinecap="round"
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="#181818"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="#181818"
              strokeLinecap="round"
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </IconButton>
      </motion.nav>
    </div>
  )

  return (
    <Fragment>
      <AppBar position="static" elevation={0} id="menubar">
        <Toolbar>
          <Grid justifyContent="space-between" container>
            <Grid item>
              <Link href="/" passHref>
                <Avatar
                  component={motion.div}
                  variant="square"
                  whileHover={{
                    rotate: -10,
                  }}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  <Image
                    src={Logo}
                    alt="Korrawich Logo"
                    layout="fixed"
                    width={32}
                    height={32}
                  />
                </Avatar>
              </Link>
            </Grid>

            <Grid item>{renderDesktopMenu}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Fragment>
  )
}

export default MenuBar
