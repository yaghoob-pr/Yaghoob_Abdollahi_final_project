import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleUpdatetoCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();
    const EmptyCart = () => (
        <Typography variant='subtitle1'>سبد شما خالی است.
            <Link to='/' className={classes.link}>رفتن به صفحه محصولات</Link>
        </Typography>
    )

    const FilledCart = () => (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
                <CartItem handleUpdatetoCartQty={handleUpdatetoCartQty} handleRemoveFromCart={handleRemoveFromCart} item={item}/> 
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography>جمع مبلغ: {cart.subtotal.formatted}</Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleEmptyCart}
            >
              خالی کردن سبد
            </Button>
            <Button
              component={Link}
              to='/checkout'
              className={classes.checkoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"

            >
              ادامه خرید
            </Button>
          </div>
        </div>
      </>
    );

    if(!cart.line_items) return (<h3>در حال بارگزاری</h3> )

    return (
      <div>
        <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>
            سبد خرید شما
          </Typography>
          {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
      </div>
    );
}

export default Cart
