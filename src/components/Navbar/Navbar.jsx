import React from 'react'
import {AppBar, ToolBar, IconButton, Bade, MenuItem, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/images.png'

const Navbar =() => {
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color ='inHerit'>
                <ToolBar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={} alt='Commerce.js' height='25px' className={classes.image}/>
                        ماری مارکت
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondery'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
        </>
    )
}