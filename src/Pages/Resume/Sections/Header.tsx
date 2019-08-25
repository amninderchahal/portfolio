import React from 'react';
import { makeStyles, Theme, createStyles, useTheme, Box, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            backgroundColor: '#3D3C40',
            color: '#ececec',
            padding: theme.spacing(8),
            textAlign: 'center',
            fontFamily: "'Raleway', sans-serif"
        },
        headerTitleWrapper: {
            border: '2.5px solid #A4A4A4',
            borderRadius: 3,
            display: 'inline-block',
            padding: theme.spacing(3, 5)
        },
        headerTitle: {
            ...theme.typography.h3,
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            fontWeight: 600,
            margin: 0,
        },
        headerTitleUnderline: {
            backgroundColor: '#ececec',
            margin: theme.spacing(1),
            width: '25%',
            height: 2.5,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 2
        },
        headerSubtitle: {
            fontWeight: 600,
            textTransform: 'uppercase',
        },
    })
)

const Header: React.FC = () => {
    const classes = useStyles(useTheme());
    return (
        <Box className={classes.header}>
            <Box className={classes.headerTitleWrapper}>
                <h3 className={classes.headerTitle}>
                    Amninder Chahal
              </h3>
                <Divider variant="middle" className={classes.headerTitleUnderline} />
                <Typography className={classes.headerSubtitle} component="p">
                    Web Developer
              </Typography>
            </Box>
        </Box>
    );
}

export default Header;