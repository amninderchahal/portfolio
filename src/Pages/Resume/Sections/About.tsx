import React from 'react';
import { Box, Typography, Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import { About } from '../Interfaces/About.interface';

let classes: any;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      wordBreak: 'break-all',
      margin: theme.spacing(0, 2),
    },
    infoTitle: {
      borderTop: '1px solid #3D3C40',
      borderBottom: '1px solid #3D3C40',
      padding: theme.spacing(0, 1),
      textTransform: 'uppercase',
      margin: theme.spacing(2, 0),
      fontWeight: 500,
      fontFamily: "'Raleway', sans-serif"
    },
    sectionWrapper: {
      padding: theme.spacing(1.5, 0),
    },
    icon: {
      "& i": {
        display: 'block',
        width: 32,
        height: 32,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: '#3D3C40',
        color: '#fff',
        padding: theme.spacing(1),
        fontSize: '1.05rem'
      }
    },
    sectionTitle: {
      fontWeight: 600,
      fontFamily: "'Raleway', sans-serif",
      fontSize: '0.9rem',
      lineHeight: '0.95rem'
    },
    sectionLink: {
      color: '#3D3C40',
      fontSize: '0.82rem',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  })
);

const renderAboutSectionHeader = (section: About) => {
  return section.type === 'text'
    ? <Typography variant="subtitle2">{section.title}</Typography>
    : <a href={section.href} target="__blank"><i className={section.icon}></i></a>
}

const renderAboutSectionContent = (section: About) => {
  return section.valueType === 'text'
    ? <Box>
      <Typography className={classes.sectionTitle} variant="subtitle2">{section.title}</Typography>
      <Typography className={classes.sectionLink} variant="body2">{section.value}</Typography>
    </Box>
    : <Box>
      <Typography className={classes.sectionTitle} variant="subtitle2">{section.title}</Typography>
      <a className={classes.sectionLink} href={section.href}>{section.value}</a>
    </Box>
}

const mapAboutSection = (section: About, index: number) => {
  return (
    <Box className={classes.sectionWrapper} key={index}>
      <Grid container justify="center" alignItems="center">
        <Grid item className={classes.icon} xs={2}>
          {renderAboutSectionHeader(section)}
        </Grid>
        <Grid item xs={10}>
          {renderAboutSectionContent(section)}
        </Grid>
      </Grid>
    </Box>
  );
}

const AboutSection: React.FC<{ about: About[] }> = (props) => {
  classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.infoTitle}>Info</Box>
      {props.about ? props.about.map(mapAboutSection) : ''}
    </Box>
  );
}

export default AboutSection;