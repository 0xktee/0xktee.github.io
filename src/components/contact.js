import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { LazyMotion, domAnimation } from 'framer-motion';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Tooltip,
} from '@material-ui/core';
import {
  Twitter,
  Linkedin,
  Github,
  Medium,
  Discord,
  Buymeacoffee,
} from '@icons-pack/react-simple-icons';

import '../styles/contact.scss';

const componentMapping = {
  Twitter,
  Linkedin,
  Github,
  Medium,
  Discord,
  Buymeacoffee,
};

const Contact = () => {
  const [isCopy, setIsCopy] = useState(false);

  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopy(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  }, [isCopy]);

  const IconSocial = (text, icon, href) => {
    const Component = componentMapping[icon];

    let linkProps = {};

    if (href !== '') {
      linkProps.href = href;
      linkProps.target = '_blank';
    }

    return (
      <Grid xs={6} sm={4} item>
        <Link {...linkProps}>
          <Card variant="outlined" className="social-card">
            <CardContent className="social-container">
              <Component className="icon-social" />

              <Typography className="text-social" variant="span">
                {text}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  };

  return (
    <LazyMotion features={domAnimation}>
      <Box
        id="contact"
        display="flex"
        className="box box-default dark-background"
        alignItems="center"
      >
        <Grid justify="center" container>
          <Grid xs={11} md={10} spacing={2} container>
            <Grid xs={12} item>
              <Typography className="header-contact" variant="span">
                Get In Touch ☕
              </Typography>
              <Typography className="describe-contact" variant="span">
                If you have something to discuss, please feel free to contact me
                anytime.
              </Typography>
            </Grid>

            {IconSocial(
              'Linkedin',
              'Linkedin',
              'https://www.linkedin.com/in/knwch/'
            )}
            {IconSocial('Github', 'Github', 'https://github.com/knwch')}
            {IconSocial('Medium', 'Medium', 'https://medium.com/@knwch')}
            {IconSocial('Twitter', 'Twitter', 'https://twitter.com/0xcronto_')}
            {IconSocial('teeshirt#1251', 'Discord', '')}
            {IconSocial('Stay motivated.', 'Buymeacoffee', '')}

            <Grid xs={12} item>
              <div className="group-contact first">
                <Typography className="typo-contact" variant="span">
                  Email
                </Typography>
                <br />
                <Tooltip title={isCopy ? 'Copied' : 'Copy to Clipboard'}>
                  <Typography
                    onClick={() =>
                      copyTextToClipboard('korrawich.kho@gmail.com')
                    }
                    className="typo-contact text email"
                    variant="span"
                  >
                    korrawich.kho@gmail.com
                  </Typography>
                </Tooltip>
              </div>

              <div className="group-contact second">
                <Typography className="typo-contact" variant="span">
                  Phone
                </Typography>
                <br />
                <Typography className="typo-contact text phone" variant="span">
                  +66 (0) 841 600 951
                </Typography>
              </div>
            </Grid>
            <Grid xs={6} item></Grid>
          </Grid>
        </Grid>
      </Box>
    </LazyMotion>
  );
};

export default Contact;
