import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Grid, Button } from '@material-ui/core';
import { Link } from 'gatsby';
import lottie from 'lottie-web';

import lonely from '../assets/lottiefiles/36395-lonely-404.json';

import '../styles/404.scss';
import '../styles/layout.scss';

const NotFoundPage = () => {
  const animation404Container = useRef();

  useEffect(() => {
    lottie.setQuality('low');
    lottie.loadAnimation({
      container: animation404Container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lonely,
      rendererSettings: {
        progressiveLoad: true,
      },
    });

    return () => {
      lottie.destroy();
    }; // optional clean up for unmounting
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
      <Box
        display="flex"
        className="box box-default"
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
    </>
  );
};

export default NotFoundPage;
