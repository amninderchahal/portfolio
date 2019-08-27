import React, { Component } from 'react';
import { Paper, Grid, createStyles, withStyles, Theme } from '@material-ui/core';
import http from '../../Services/http';
import AboutSection from './Sections/About';
import Header from './Sections/Header';
import { About } from './Interfaces/About.interface';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#076585',
      backgroundImage: 'linear-gradient(160deg, #e2eef8, #f9e7e8)',
      minHeight: '100%',
      padding: theme.spacing(3)
    },
    resumeWrapper: {
      width: 870,
      margin: 'auto',
      color: '#fff'
    },
    leftContent: {
      backgroundColor: '#3D3C40',
      padding: theme.spacing(2, 3)
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
          <Paper className={classes.resumeWrapper} elevation={6}>
              <Grid container>
                <Grid item xs={4} className={classes.leftContent}>
                  <Header></Header>
                  <AboutSection about={this.state.about}></AboutSection>
                </Grid>
                <Grid item xs={8}>
                  Main
                </Grid>
              </Grid>
          </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Resume);