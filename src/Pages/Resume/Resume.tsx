import React, { Component } from 'react';
import { Paper, Grid, Box, createStyles, withStyles, Theme } from '@material-ui/core';
import http from '../../Services/http';
import AboutSection from './Sections/About';
import Header from './Sections/Header';
import { About } from './Interfaces/About.interface';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#076585',
      backgroundImage: 'linear-gradient(160deg, #e2eef8, #f9e7e8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */',
      opacity: 0.95,
      minHeight: '100%',
      padding: theme.spacing(3)
    },
    resumeWrapper: {
      maxWidth: 900,
      margin: 'auto',
      '@media print': {
        width: '100%'
      }
    },
    footer: {
      backgroundColor: '#3D3C40',
      padding: theme.spacing(1.5),
    }
  })

interface Props {
  classes: any
}

interface State {
  about: About[]
}

class Resume extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { about: [] };
  }

  componentDidMount() {
    http.getResumeData().then((res: any) =>
      this.setState({
        about: res.data.about
      }))
  }

  render() {
    const classes = this.props.classes;

    return (
      <Grid container className={classes.root} justify="center" spacing={2}>
        <Grid item xs={9}>
          <Paper className={classes.resumeWrapper} elevation={6}>
            <Header></Header>

            <Box p={2}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <AboutSection about={this.state.about}></AboutSection>
                </Grid>
                <Grid item xs={8}>
                  Main
                </Grid>
              </Grid>
            </Box>

            <Box className={classes.footer}></Box>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Resume);