/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import '../styles/layout.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Menubar from './menubar';
import Splash from '../components/splash';
import { SplashContext } from '../contexts/splashcontext';

const THEME = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: `'Airbnb Cereal App', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

const Layout = ({ children }) => {
  const { isSplashFinish } = useContext(SplashContext);

  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Korrawich's Portfolio</title>
        <meta
          name="description"
          content="A developer portfolio website of Korrawich Khosripetch."
        />
      </Helmet>

      <MuiThemeProvider theme={THEME}>
        {isSplashFinish ? (
          <>
            <Menubar />
            <main>{children}</main>

            <footer id="footer">
              <div className="footer-heart">
                Made with
                <span role="img" aria-label="green-heart" className="emoji">
                  &nbsp;💚&nbsp;
                </span>
                by&nbsp;
                <a
                  href="https://github.com/knwch"
                  rel="noreferrer"
                  target="_blank"
                >
                  &nbsp;t.&nbsp;
                </a>
              </div>
            </footer>
          </>
        ) : (
          <Splash />
        )}
      </MuiThemeProvider>

      <div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
