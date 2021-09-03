import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Button} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import CategoryIcon from "@material-ui/icons/Category";
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/images.png'
import useStyles from './styles'
import '../../App.css'

const Navbar =({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    const [state, setState] = useState({
        mobileView: false
    })

    const {mobileView} = state;

    useEffect(()=> {
        const setResponsiveness= () => {
        return window.innerWidth < 900 ?
        setState((prevState) => ({...prevState, mobileView: true}))
        : setState((prevState) => ({...prevState, mobileView: false}))

        }

        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())

        return () => {
            window.removeEventListener('resize', () => (setResponsiveness()))
        }
    }, [])

    return (
      <>
        <AppBar position="fixed" className={classes.appBar} color="inHerit">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h4"
              className={classes.title}
              color="inherit"
            >
              <img
                src={logo}
                alt="Commerce.js"
                height="25px"
                className={classes.image}
              />
            {mobileView ? '': <span>مای مارکت</span>}
            </Typography>

            <Button
              component={Link}
              to="/categories"
              style={{
                fontSize: "18px",
                marginRight: "30px",
              }}
              color="inherit"
            >
              محصولات
            </Button>
            <Button
              component={Link}
              style={{
                fontSize: "18px",
              }}
              to="/categories"
              color="inherit"
            >
              درباره ما
            </Button>

            <div className={classes.grow} />

            <Button component={Link} to = "/login">
              ورود
              {console.log(',,,,,')}
              </Button>
            {location.pathname === "/" && (
              <div className={classes.button}>
                <Link to="/cart"></Link>
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart items"
                  color="inherit"
                >
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </>
    );
}


export default Navbar;
