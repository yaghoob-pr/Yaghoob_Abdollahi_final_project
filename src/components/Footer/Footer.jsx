import React from 'react'
import { Container, Grid, Box, ListSubheader } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}


export const Footer = () => {
    const classes = useStyles();
    return (


        <footer>

            <Grid container spacing={10}>
            <Grid item xs={12} md={4}>
                <List component="nav" aria-label="main folders">
                    <ListSubheader color='inherit'>
                        <Typography variant='h5'>
                            خدمات
                        </Typography>
                    </ListSubheader>
                    <ListItem button>
                        <ListItemText align='right' color='textSecondary' primary='پاسخ به پرسش های متدوال' />

                    </ListItem>
                    <ListItem button >
                        <ListItemText align='right' primary="بازگشت کالا" />
                    </ListItem>
                    <ListItem button >
                        <ListItemText align='right' primary="حریم خصوصی" />
                    </ListItem>
                </List>
            </Grid>
                
                <Grid item xs={12} md={4}>
                    <List component="nav" aria-label="mainfolders">
                        <ListSubheader color='inherit'>
                            <Typography variant='h5'>
                                راهنمای خرید از مای‌ مارکت
                            </Typography>
                        </ListSubheader>
                        <ListItem button >
                            <ListItemText align='right' primary="نحوه ثبت سفارش" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText align='right' primary="رویه ارسال سفارش" />
                        </ListItem>
                        <ListItem button >
                            <ListItemText align='right' primary="شیوه های پرداخت" />
                        </ListItem>
                    </List>
                </Grid>

                <Grid item xs={12} md={4}>
                    <List component="nav" aria-label="main mailbox folders">
                    <ListSubheader color='inherit'>
                            <Typography variant='h5'>
                                با ما همراه باشید
                            </Typography>
                        </ListSubheader>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Typography align='center'>
                همه حقوق محفوظ است
            </Typography>
        </footer>

    )
}

export default Footer