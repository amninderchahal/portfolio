import React from 'react';
import { Box, Typography, Grid, createStyles, makeStyles, Theme } from '@material-ui/core';
import { About } from '../Interfaces/About.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      wordBreak: 'break-all'
    }
  })
);

const renderAboutSectionHeader = (section: About) => {
  return section.type === 'text'
    ? <Typography variant="subtitle1">{section.title}</Typography>
    : <i className={section.title}></i>
}

const renderAboutSectionContent = (section: About) => {
  return section.valueType === 'text'
    ? <Typography variant="body1">{section.value}</Typography>
    : <a href={section.href}>{section.value}</a>
}

const mapAboutSection = (section: About, index: number) => {
  return (
    <Box key={index}>
      <Grid container>
        <Grid item xs={4}>
          {renderAboutSectionHeader(section)}
        </Grid>
        <Grid item xs={8}>
          {renderAboutSectionContent(section)}
        </Grid>
      </Grid>
    </Box>
  );
}

const AboutSection: React.FC<{ about: About[] }> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {props.about ? props.about.map(mapAboutSection) : ''}
    </Box>
  );
}

export default AboutSection;