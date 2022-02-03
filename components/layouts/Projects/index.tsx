import React, { Fragment, FC, useState } from 'react'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardActions,
  Button,
} from '@mui/material'
import {
  Tensorflow,
  Opencv,
  Plotly,
  Nestjs,
  Angular,
  Mongodb,
  Nodedotjs,
  Flask,
  Firebase,
  Googlemaps,
  Mapbox,
  Semanticuireact,
  ReactJs,
  Redux,
  Github,
} from '@icons-pack/react-simple-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import projectsData from '../../../data/projects.json'

const componentMapping: any = {
  Tensorflow,
  Opencv,
  Plotly,
  Nestjs,
  Angular,
  Mongodb,
  Nodedotjs,
  Flask,
  Firebase,
  Googlemaps,
  Mapbox,
  Semanticuireact,
  ReactJs,
  Redux,
  Github,
}

const textMapping: any = {
  Tensorflow: 'Tensorflow',
  Opencv: 'OpenCV',
  Plotly: 'Plotly',
  Nestjs: 'NestJS',
  Angular: 'Angular',
  Mongodb: 'MongoDB',
  Nodedotjs: 'Node.js',
  Flask: 'Flask',
  Firebase: 'Firebase',
  Googlemaps: 'Google Maps',
  Mapbox: 'Mapbox',
  Semanticuireact: 'Semantic UI React',
  ReactJs: 'React Native',
  Redux: 'Redux',
  Github: 'Github',
}

const Projects: FC = () => {
  const [selectedId, setSelectedId] = useState(null)

  const CardProject = (data: any, index: any) => {
    return (
      <motion.div whileHover={{ scale: 1.04 }} className="card-container list">
        <Card
          layoutId={`card-test-${index}`}
          component={motion.div}
          onClick={() => setSelectedId(index)}
        >
          <CardContent
            component={motion.div}
            layoutId={`card-content-container-${index}`}
          >
            <motion.div
              className="card-title-container"
              layoutId={`card-title-container-${index}`}
            >
              <Typography component="h3" className="card-header">
                {data.title}
              </Typography>
            </motion.div>

            <motion.div
              className="card-stack-container"
              layoutId={`card-stack-container-${index}`}
            >
              {data?.stack.map((item: any, index: any) => {
                const Component = componentMapping[item]
                return <Component key={index} className="icon" size={18} />
              })}
            </motion.div>
          </CardContent>

          <span className="card-external-container" hidden={data.demo === ''}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </Card>
      </motion.div>
    )
  }

  return (
    <Box
      id="projects"
      display="flex"
      className="box box-default light-background"
      alignItems="center"
    >
      <Grid
        style={{ paddingTop: 32, paddingBottom: 32 }}
        justifyContent="center"
        container
      >
        <Grid xs={11} md={9} lg={8} spacing={4} container>
          <Grid xs={12} item>
            <Typography component="h2" variant="h2">
              Feature Projects
            </Typography>
            <Typography component="p" variant="body1">
              Some of the projects which I worked on, also you can see more on
              my{' '}
              <a
                id="githubl1"
                href="https://github.com/knwch"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
              .
            </Typography>
          </Grid>

          <AnimateSharedLayout>
            {projectsData.map((item, index) => (
              <Grid key={index} xs={12} sm={6} md={4} item>
                {CardProject(item, index + 1)}
              </Grid>
            ))}

            <AnimatePresence>
              {selectedId != null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  key="overlay"
                  className="overlay"
                  onClick={() => setSelectedId(null)}
                />
              )}

              {selectedId != null && (
                <div className="card-container open">
                  <Card
                    layoutId={`card-test-${selectedId}`}
                    className="single"
                    variant="outlined"
                    component={motion.div}
                  >
                    <CardContent
                      component={motion.div}
                      layoutId={`card-content-container-${selectedId}`}
                    >
                      <motion.div
                        className="card-title-container"
                        layoutId={`card-title-container-${selectedId}`}
                      >
                        <Typography component="h3" className="card-header">
                          {projectsData[selectedId - 1].title}
                        </Typography>
                      </motion.div>
                      <motion.div className="card-describe-container" animate>
                        <Typography component="p">
                          {projectsData[selectedId - 1].describe}
                        </Typography>
                      </motion.div>

                      <motion.div className="card-stack-container" animate>
                        <Typography component="p">Tools used</Typography>
                      </motion.div>
                      <motion.div
                        className="card-stack-container"
                        layoutId={`card-stack-container-${selectedId}`}
                      >
                        {projectsData[selectedId - 1]?.stack.map(
                          (item, index) => {
                            const Component = componentMapping[item]
                            const Text = textMapping[item]
                            return (
                              <Fragment key={index}>
                                <div className="icon-project-group">
                                  <Component className="icon" />
                                  <Typography component="p" className="text">
                                    {Text}
                                  </Typography>
                                </div>
                                <br />
                              </Fragment>
                            )
                          }
                        )}
                      </motion.div>
                    </CardContent>
                    <CardActions>
                      <Button
                        component="a"
                        className="demo"
                        variant="outlined"
                        disabled={projectsData[selectedId - 1].demo === ''}
                        href={projectsData[selectedId - 1].demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </Button>

                      <Button
                        component="a"
                        className="github"
                        variant="outlined"
                        disabled={projectsData[selectedId - 1].git === ''}
                        endIcon={<Github size={18} />}
                        href={projectsData[selectedId - 1].git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See on
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Projects
