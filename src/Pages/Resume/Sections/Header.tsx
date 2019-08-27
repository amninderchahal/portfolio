import React from 'react';
import { makeStyles, Theme, createStyles, useTheme, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            fontFamily: "'Raleway', sans-serif",
            textAlign: 'center',
            paddingTop: theme.spacing(6)
        },
        title: {
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            fontWeight: 600,
            margin: 0,
            marginBottom: '0.1rem'
        },
        surname: {
            marginBottom: theme.spacing(2),
            color: '#7cbef5'
        },
        subtitle: {
            fontWeight: 500,
            fontSize: '0.85rem',
            lineHeight: '1.2rem',
            textTransform: 'uppercase',
            borderTop: '1px solid #A4A4A4',
            borderBottom: '1px solid #A4A4A4'
        },
    })
)

const Header: React.FC = () => {
    const classes = useStyles(useTheme());
    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.title} variant="h4">Amninder</Typography>
            <Typography className={`${classes.title} ${classes.surname}`} variant="h4">Chahal</Typography>
            <Typography className={classes.subtitle}>Web Developer</Typography>
        </Box>
    );
}

export default Header;