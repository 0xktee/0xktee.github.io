import React, { useState } from 'react';
import { Link } from 'gatsby';

import { motion, AnimatePresence } from 'framer-motion';

import Layout from '../components/layout';
import { makeStyles, Typography } from '@material-ui/core';

const IndexPage = () => {
  let [visible, setVisible] = useState(false);
  let string = 'heelloo asaz sss';
  let words = string.split(' ');

  return (
    <Layout>
      <Typography variant="h3" component="h2">
        Hello there.
      </Typography>

      <Typography variant="h3" component="h3">
        I am Tee.
      </Typography>
      <Typography variant="h5" component="h1">
        Korrawich Khosripetch.
      </Typography>
    </Layout>
  );
};

export default IndexPage;
