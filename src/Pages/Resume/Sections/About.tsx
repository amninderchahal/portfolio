import React from 'react';
import { Box, Typography, Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import { About } from '../Interfaces/About.interface';

let classes: any;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      wordBreak: 'break-all',
      paddingTop: theme.spacing(8)
    },
    infoTitle: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: '1.05rem',
      fontFamily: "'Raleway', sans-serif",
      borderTop: '1px solid #A4A4A4',
      borderBottom: '1px solid #A4A4A4',
      paddingLeft: theme.spacing(1)
    },
    content: {
      paddingTop: theme.spacing(2)
    },
    sectionWrapper: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      color: '#DADADA'
    },
    icon: {
      "& i": {
        display: 'block',
        width: 32,
        height: 32,
        borderRadius: '50%',
        textAlign: 'center',
        backgroundColor: '#DADADA',
        color: '#3D3C40',
        padding: theme.spacing(1),
        fontSize: 17
      },
      "& a": {
        textDecoration: 'none'
      }
    },
    sectionContent: {
      paddingLeft: theme.spacing(0.5)
    },
    sectionTitle: {
      fontWeight: 600,
      fontFamily: "'Raleway', sans-serif",
      fontSize: '0.87rem',
      lineHeight: '0.85rem'
    },
    sectionLink: {
      fontSize: '0.85rem',
      textDecoration: 'none',
      color: '#DADADA',
      fontStyle: 'italic',
      fontFamily: '"Arial", sans-serif',
      '&:hover': {
        textDecoration: 'underline',
      }
    },
    sectionText: {
      display: 'block',
      marginTop: 3,
      '&:hover': {
        textDecoration: 'none',
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
    ? <Box className={classes.sectionContent}>
      <Typography className={classes.sectionTitle} variant="subtitle2">{section.title}</Typography>
      <Typography className={`${classes.sectionLink} ${classes.sectionText}`} variant="body2">{section.value}</Typography>
    </Box>
    : <Box className={classes.sectionContent}>
      <Typography className={classes.sectionTitle} variant="subtitle2">{section.title}</Typography>
      <a className={classes.sectionLink} href={section.href} target="__blank">{section.value}</a>
    </Box>
}

const mapAboutSection = (section: About, index: number) => {
  return (
    <Box className={classes.sectionWrapper} key={index}>
      <Grid container justify="center" alignItems="flex-start">
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
      <Typography className={classes.infoTitle}>Info</Typography>
      <Box className={classes.content}>
        {props.about ? props.about.map(mapAboutSection) : ''}
      </Box>
    </Box>
  );
}

export default AboutSection;