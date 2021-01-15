import React from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

import Layout from "../components/layout"
import { makeStyles, Typography } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <motion.div
      animate={{ x: 100 }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Typography variant="h3" component="h2">
        Hello there.
      </Typography>
      <Typography variant="h3" component="h3">
        I am
      </Typography>
      <Typography variant="h3" component="h1">
        Korrawich Khosripetch.
      </Typography>
    </motion.div>
  </Layout>
)

export default IndexPage
