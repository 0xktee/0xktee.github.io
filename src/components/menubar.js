import React, { Fragment } from "react"
import { Link } from "gatsby"
import "../styles/menubar.css"

import {
  makeStyles,
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Grid,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  topBorder: {
    "border-top-style": "solid",
    "border-width": "2px",
    "border-color": "#feca2f",
    width: "100%",
  },
  marginMenuDesktop: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  menuLogo: {
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  textButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "none",
  },
  textButtonLast: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "none",
  },
}))

const MenuBar = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <AppBar
        className={`${classes.topBorder} ${classes.marginMenuDesktop}`}
        color="transparent"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Link to="/">
                <Avatar
                  variant="square"
                  className={classes.menuLogo}
                  // src={require("../../assets/logo/startup-128.png")}
                />
              </Link>
            </Grid>

            <Grid item>
              <Fragment className={classes.sectionDesktop}>
                <Button
                  component={Link}
                  to="/about"
                  className={classes.textButton}
                >
                  About
                </Button>
                <Button
                  component={Link}
                  to="/projects"
                  className={classes.textButton}
                >
                  Projects
                </Button>
                <Button
                  component={Link}
                  href="https://github.com/knwch"
                  className={classes.textButtonLast}
                >
                  Github
                </Button>
              </Fragment>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default MenuBar
