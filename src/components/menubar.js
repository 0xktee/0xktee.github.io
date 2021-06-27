import React, { Fragment } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/menubar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/logo-plain.svg';

import {
  AppBar,
  Toolbar,
  Avatar,
  Button,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const sidebar = {
  open: {
    clipPath: `circle(250px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'block',
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
    display: 'none',
  },
};

const livariants = {
  open: {
    x: -15,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 0,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const MenuBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const renderDesktopMenu = (
    <div className="desktop-section">
      <Link to="/resume" className="button-desktop">
        <Button
          className="text-button"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disableRipple
        >
          Resume
        </Button>
      </Link>
      <Link className="button-desktop">
        <Button
          onClick={() => scrollTo('#projects')}
          className="text-button"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
        </Button>
      </Link>
      <Link href="https://github.com/knwch" className="button-desktop">
        <Button
          className="text-button"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Github
        </Button>
      </Link>
    </div>
  );

  const renderMobileMenu = (
    <div className="mobile-section">
      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <motion.div className="tab-background" variants={sidebar} />
        <List
          component={motion.ul}
          className="list-mobile"
          variants={ulvariants}
        >
          <Link to="/resume" className="button-mobile">
            <ListItem
              component={motion.li}
              variants={livariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-button"
            >
              <ListItemText primary="Resume" />
              <FontAwesomeIcon
                icon={faUserAstronaut}
                className="awesome-icon"
                size="lg"
              />
            </ListItem>
          </Link>
          <Link className="button-mobile">
            <ListItem
              onClick={() => {
                toggleOpen();
                scrollTo('#projects');
              }}
              component={motion.li}
              variants={livariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-button"
            >
              <ListItemText primary="Projects" />
              <FontAwesomeIcon
                icon={faBook}
                className="awesome-icon"
                size="lg"
              />
            </ListItem>
          </Link>
          <Link href="https://github.com/knwch" className="button-mobile">
            <ListItem
              component={motion.li}
              variants={livariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-button"
            >
              <ListItemText primary="Github" />
              <FontAwesomeIcon
                icon={faGithub}
                className="awesome-icon"
                size="lg"
              />
            </ListItem>
          </Link>
        </List>
        <IconButton
          component={motion.div}
          whileTap={{ scale: 0.8 }}
          className="tab-icon"
          onClick={() => toggleOpen()}
          disableRipple={true}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="#212121"
              strokeLinecap="round"
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <motion.path
              fill="transparent"
              strokeWidth="3"
              stroke="#212121"
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
              stroke="#212121"
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
  );

  return (
    <Fragment>
      <AppBar
        className="top-border bar-color responsive-x-margin"
        color="transparent"
        position="static"
        elevation={0}
        id="menubar"
      >
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Link to="/">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: -15,
                  }}
                >
                  <Avatar
                    variant="square"
                    className="web-logo"
                    src={Logo}
                    alt="knwch"
                  />
                </motion.div>
              </Link>
            </Grid>

            <Grid item>{renderDesktopMenu}</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Fragment>
  );
};

export default MenuBar;
