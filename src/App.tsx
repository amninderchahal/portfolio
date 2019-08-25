import React from 'react';
import './App.css';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Pages/Resume/Resume';
import { makeStyles, Theme, createStyles, Grid, createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 14,
    h3: {
      fontSize: '3rem'
    },
    fontFamily: [
      'Nunito Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'Nunito Sans',
            src: 'url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cceyI9tAcVwob5A.woff2)'
          },
          {
            fontFamily: 'Nunito Sans',
            src: 'url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8ccezI9tAcVwob5A.woff2)'
          },
          {
            fontFamily: 'Nunito Sans',
            src: 'url(https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9tAcVwo.woff2)'
          }
        ]
      },
    },
  },
})

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%'
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Grid container className={classes.root} spacing={0}>
{/*           <Grid item xs={2}>
            <NavBar />
          </Grid> */}
          <Grid item xs={12}>
            <Switch>
              <Route exact path='/' component={Resume} />
              <Route exact path='/about' component={About} />
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
