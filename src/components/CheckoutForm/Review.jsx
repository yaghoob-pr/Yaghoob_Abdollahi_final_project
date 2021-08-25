import React from 'react'
import {Typography, List, ListItem, ListItemText} from '@material-ui/core'

const Review = ({checkoutToken}) => {
    return (
        <>
            <Typography variant='h6' gutterBottom>خلاصه سفارش</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} dir='ltr' key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                        <Typography variant='body2' style={{float: 'left'}}>{product.line_total.formatted}</Typography>      
                    </ListItem>
                ))}

                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary='total'/>
                    <Typography variant='subtitle1' style={{fontWeight: 700}}>
                    {checkoutToken.live.subtotal.formatted}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
