import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Box, Typography, Grid, Button, Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Profile from '../assets/profile.jpg';
import Viper from '../assets/viper-glasses.png';
import '../styles/resume.scss';

const Resume = () => {
  function printFile() {
    const tempTitle = document.title;
    document.title = 'korrawich_khosripetch_portfolio.pdf';
    window.print();
    document.title = tempTitle;
  }

  return (
    <LazyMotion features={domAnimation}>
      <Button
        id="printbutton"
        size="large"
        onClick={() => printFile()}
        aria-label="print"
        disableRipple
        startIcon={<FontAwesomeIcon icon={faPrint} />}
      >
        Print
      </Button>

      <Box className="page a4" justifyContent="center">
        <Grid className="grid-container" container>
          <Grid xs={12} spacing={4} alignItems="center" container>
            <Grid className="profile-container" item>
              <Avatar
                alt="Korrawich Khosripetch"
                src={Profile}
                className="profile-avatar"
              />
              <img alt="Viper" src={Viper} className="profile-viper" />
            </Grid>
            <Grid className="head-container" item>
              <Typography className="title" variant="span">
                Korrawich Khosripetch
              </Typography>
              <Typography className="role" variant="span">
                Developer
              </Typography>
              <Typography className="contact" variant="span">
                <span className="type">Phone</span>084-160-0951
                <br />
                <span className="type">Email</span>korrawich.kho@gmail.com
                <br />
                <span className="type">Website</span>knwch.github.io
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid className="section-container" item>
              <Typography className="title" variant="span">
                Profile
              </Typography>
              <Typography className="detail" variant="span">
                Fresh graduate developer with experience in small projects and a
                desire to build something meaningful for people by using
                technology. Also loving to spread ideas and solve problems
                especially with code.
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid className="section-container" item>
              <Typography className="title" variant="span">
                Experience
              </Typography>
              <Typography className="detail" variant="span">
                <div className="exp">
                  <span className="head">Full Stack Developer Intern</span>{' '}
                  (2021)
                  <br />4 months internship at ScoutOut Recruitment.
                  <ul>
                    <li>
                      Designed and developed a web application for guiding
                      career skills development.
                    </li>
                    <li>
                      Developed a web application which fetching Google Custom
                      Search API and cleaning received results for the usage
                      purposes.
                    </li>
                  </ul>
                </div>
                {/* <li>
                    Developed Courses Management Web Application for professor
                    in the field.
                  </li> */}
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid className="section-container" item>
              <Typography className="title" variant="span">
                Education
              </Typography>
              <Typography className="detail" variant="span">
                <div className="edu">
                  <span className="head">B.S. in Applied Computer Science</span>{' '}
                  (2017 - 2021)
                  <br />
                  <span>King Mongkut’s University of Technology Thonburi</span>
                  <br />
                  <span>GPA of 3.67</span>
                </div>
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid className="section-container" item>
              <Typography className="title" variant="span">
                Technical Skills
              </Typography>
              <Typography className="detail" variant="span">
                <div className="skill">
                  <span className="head">Programming Language</span>
                  <br />
                  <span>
                    Be able to coding in JavaScript, Python, TypeScript and a
                    bit of Java.
                  </span>
                </div>

                <div className="skill">
                  <span className="head">Frontend Development</span>
                  <br />
                  <span>
                    React/Redux, Angular/NGXS, React Native, Gatsby, HTML5,
                    SCSS, Material UI and Framer Motion.
                  </span>
                </div>

                <div className="skill">
                  <span className="head">Backend Development</span>
                  <br />
                  <span>
                    NestJS, Flask, Node.js, REST API, Cloud Functions, Firestore
                    and MongoDB.
                  </span>
                </div>

                <div className="skill">
                  <span className="head">Others</span>
                  <br />
                  <span>
                    Machine Learning, Data Cleaning, Blockchain and DeFi
                    Technology.
                  </span>
                </div>
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid className="section-container" item>
              <Typography className="title" variant="span">
                Soft Skills
              </Typography>
              <Typography className="detail" variant="span">
                <ul>
                  <li>
                    Be able to understand and speak intermediate English
                    conversations.
                  </li>
                  <li>Good at the big picture thinking.</li>
                  <li>Confident to speak up when having opinions or ideas.</li>
                  <li>Have empathy for the team and others.</li>
                  {/* <li>Loving self-learning.</li> */}
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </LazyMotion>
  );
};

export default Resume;
