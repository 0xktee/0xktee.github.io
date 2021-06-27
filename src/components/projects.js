import React, { Fragment, useState } from 'react';
import {
  m,
  AnimateSharedLayout,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import { Link } from 'gatsby';

import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardActions,
  Button,
} from '@material-ui/core';
import {
  Tensorflow,
  Opencv,
  Plotly,
  Nestjs,
  Angular,
  Mongodb,
  NodeDotJs,
  Flask,
  Firebase,
  Googlemaps,
  Mapbox,
  Semanticuireact,
  ReactJs,
  Redux,
  Github,
} from '@icons-pack/react-simple-icons';
import projectsData from '../data/projects.json';

import '../styles/projects.scss';

const componentMapping = {
  Tensorflow,
  Opencv,
  Plotly,
  Nestjs,
  Angular,
  Mongodb,
  NodeDotJs,
  Flask,
  Firebase,
  Googlemaps,
  Mapbox,
  Semanticuireact,
  ReactJs,
  Redux,
  Github,
};

const textMapping = {
  Tensorflow: 'Tensorflow',
  Opencv: 'OpenCV',
  Plotly: 'Plotly',
  Nestjs: 'NestJS',
  Angular: 'Angular',
  Mongodb: 'MongoDB',
  NodeDotJs: 'Node.js',
  Flask: 'Flask',
  Firebase: 'Firebase',
  Googlemaps: 'Google Maps',
  Mapbox: 'Mapbox',
  Semanticuireact: 'Semantic UI React',
  ReactJs: 'React Native',
  Redux: 'Redux',
  Github: 'Github',
};

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const CardProject = (data, index) => {
    return (
      <m.div whileHover={{ scale: 1.04 }} className="card-container">
        <Card
          layoutId={`card-test-${index}`}
          className="card-project list"
          variant="outlined"
          component={m.div}
          onClick={() => setSelectedId(index)}
        >
          <CardContent
            component={m.div}
            layoutId={`card-content-container-${index}`}
          >
            <m.div
              className="card-title-container"
              layoutId={`card-title-container-${index}`}
            >
              <Typography variant="span" className="card-project-header">
                {data.title}
              </Typography>
            </m.div>

            <m.div
              className="card-stack-container"
              layoutId={`card-stack-container-${index}`}
            >
              {data?.stack.map((item, index) => {
                const Component = componentMapping[item];
                return <Component className="icon-stack non-text" size={18} />;
              })}
            </m.div>

            {/* <m.div
              className="card-github-container"
              layoutId={`card-github-container-${index}`}
            >
              <Github size={18} />
            </m.div> */}
          </CardContent>
        </Card>
      </m.div>
    );
  };

  return (
    <LazyMotion features={domAnimation}>
      {/* <svg
        className="triangle top"
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0 0, 100 100, 100 0" style={{ fill: "#212121" }} />
      </svg> */}
      <Box
        id="projects"
        display="flex"
        className="box box-default light-background"
        alignItems="center"
      >
        <Grid
          style={{ paddingTop: 32, paddingBottom: 32 }}
          justify="center"
          container
        >
          <Grid xs={11} md={9} lg={8} spacing={2} container>
            <Grid xs={12} item>
              <Typography className="header-project" variant="span">
                Feature Projects 📔
              </Typography>
            </Grid>

            <AnimateSharedLayout type="crossfade">
              {projectsData.map((item, index) => (
                <Grid xs={12} sm={6} md={4} item>
                  {CardProject(item, index + 1)}
                </Grid>
              ))}

              <AnimatePresence>
                {selectedId != null && (
                  <m.div
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
                      className="card-project single"
                      variant="outlined"
                      component={m.div}
                    >
                      <CardContent
                        component={m.div}
                        layoutId={`card-content-container-${selectedId}`}
                      >
                        <m.div
                          className="card-title-container"
                          layoutId={`card-title-container-${selectedId}`}
                        >
                          <Typography
                            variant="span"
                            className="card-project-header"
                          >
                            {projectsData[selectedId - 1].title}
                          </Typography>
                        </m.div>
                        <m.div className="card-describe-container" animate>
                          <Typography variant="span">
                            {projectsData[selectedId - 1].describe}
                          </Typography>
                        </m.div>

                        <m.div className="card-head-stack-container" animate>
                          <Typography variant="span">Tools used</Typography>
                        </m.div>
                        <m.div
                          className="card-stack-container"
                          layoutId={`card-stack-container-${selectedId}`}
                        >
                          {projectsData[selectedId - 1]?.stack.map(
                            (item, index) => {
                              const Component = componentMapping[item];
                              const Text = textMapping[item];
                              return (
                                <Fragment>
                                  <div className="icon-project-group">
                                    <Component className="icon-stack" />
                                    <Typography
                                      className="text-stack"
                                      variant="span"
                                    >
                                      {Text}
                                    </Typography>
                                  </div>
                                  <br />
                                </Fragment>
                              );
                            }
                          )}
                        </m.div>
                      </CardContent>
                      <CardActions>
                        <Button
                          component={Link}
                          href={projectsData[selectedId - 1].url}
                          target="_blank"
                          className="button-github"
                          variant="outlined"
                          disabled={projectsData[selectedId - 1].url === ''}
                          endIcon={<Github size={18} />}
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
      {/* <svg
        className="triangle bottom"
        width="100%"
        height="70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0 0, 100 100, 0 100" style={{ fill: "#212121" }} />
      </svg> */}
    </LazyMotion>
  );
};

export default Projects;
