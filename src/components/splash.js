import React, { useEffect, useContext } from 'react';
import { SplashContext } from '../contexts/splashcontext';

import { Box, Grid } from '@material-ui/core';
import anime from 'animejs/lib/anime.es.js';

const Splash = () => {
  const strokeColor = '#2cf1aa';
  const { setSplashFinish } = useContext(SplashContext);

  useEffect(() => {
    anime({
      targets: '#splash path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1200,
      delay: function (el, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: false,
    });

    const timer = setTimeout(() => {
      setSplashFinish(true);
    }, 2500);

    return () => {
      anime.remove('#splash path');
      clearTimeout(timer);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box display="flex" className="box box-default dark-background">
      <Grid justify="center" alignItems="center" container>
        <svg
          height="72px"
          id="splash"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 818.4 248.16"
        >
          <path
            d="M156.57,598.12V358.77h52.16v137l56.32-68.17h59.2L259,503.08l73,95H267.61l-58.88-83.83v83.83Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            d="M294.49,598.12V427.56h48l1.6,22.4a54.6,54.6,0,0,1,20.16-19.84q12.79-7.35,29.44-7.35,18.24,0,31.84,9t21.12,25.12q7.52,16.15,7.52,38.23v103H402V502.44q0-15-6.88-23.84t-19-8.79a27.78,27.78,0,0,0-15.2,4.15,29.68,29.68,0,0,0-10.4,11.37,33.76,33.76,0,0,0-3.84,16.15v96.64Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            d="M470.49,598.12,414.17,427.56h54.4L495.45,535.4l30.72-107.84h46.08L603,536l27.84-108.48h52.48L627,598.12H578.65L548.57,491.25l-30.4,106.87Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            d="M721.69,602.92a89.27,89.27,0,0,1-34.4-6.55,81.45,81.45,0,0,1-27.52-18.57,86.45,86.45,0,0,1-18.24-28.16A93.14,93.14,0,0,1,635,514.29a95.72,95.72,0,0,1,6.72-36.17A92.11,92.11,0,0,1,660.25,449a82.93,82.93,0,0,1,28-19.35A87.64,87.64,0,0,1,723,422.77a85.17,85.17,0,0,1,35.68,7.35,74.4,74.4,0,0,1,42.4,52.48l-50.56,8.32A36.9,36.9,0,0,0,739,475.4a27.26,27.26,0,0,0-17-5.59,28.42,28.42,0,0,0-17.44,5.59,38.83,38.83,0,0,0-12,15.52,53.83,53.83,0,0,0-4.48,22.41,53.29,53.29,0,0,0,4.32,22.07,36.13,36.13,0,0,0,12,15.05,29.66,29.66,0,0,0,17.6,5.43,31.87,31.87,0,0,0,18.08-5.43,31.48,31.48,0,0,0,12-15.68l50.56,8.31a68.54,68.54,0,0,1-10.4,24.48,78.75,78.75,0,0,1-42.4,31.21A94.81,94.81,0,0,1,721.69,602.92Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            d="M772.25,598.12V358.77h52.16v87.35A54.7,54.7,0,0,1,844.09,429a58.55,58.55,0,0,1,27.36-6.23q18.24,0,31.84,9t21.12,25.12q7.51,16.15,7.52,38.23v103H879.77V502.44q0-15-6.88-23.84t-19-8.79a27.78,27.78,0,0,0-15.2,4.15,29.75,29.75,0,0,0-10.4,11.37,33.76,33.76,0,0,0-3.84,16.15v96.64Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
          <path
            d="M939.29,599.4a30.81,30.81,0,0,1-16.16-4.32,31.6,31.6,0,0,1-11.36-11.52,32.24,32.24,0,0,1,0-31.68,31.73,31.73,0,0,1,11.36-11.51,32.32,32.32,0,0,1,32.32,0,31.73,31.73,0,0,1,11.36,11.51,32.24,32.24,0,0,1,0,31.68,31.6,31.6,0,0,1-11.36,11.52A30.81,30.81,0,0,1,939.29,599.4Z"
            transform="translate(-154.57 -356.77)"
            fill="none"
            stroke={strokeColor}
            stroke-miterlimit="10"
            stroke-width="5"
          />
        </svg>
      </Grid>
    </Box>
  );
};

export default Splash;
