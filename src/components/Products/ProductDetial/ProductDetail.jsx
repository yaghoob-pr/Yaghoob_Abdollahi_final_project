import { Typography, Grid, Card, CardMedia, CardContent, CssBaseline, spacing } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'
import { Button } from '@material-ui/core'
const ProductDetail = ({ match, products, onAddToCart }) => {
    const classes = useStyles();
    if (0)
        return (<>ll</>)
    const product =
        products.filter((product) =>
            (product.id === match.params.productId))[0];
    console.log(product)
    return (
        <>
            <CssBaseline />
            <main>
                <div className={classes.toolbar} />
                <Card className={classes.root} sm={12} lg={12}>
                    <Grid container justify='center' spacing={5}>
                        <Grid xs={12} sm={12} md={6} lg={6}>
                            <CardMedia
                                className={classes.media}
                                image={product.media.source}
                                title={product.name}
                            />
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6}>
                            <CardContent >
                                <Typography className={classes.center} variant='h4'>
                                    {product.name}
                                </Typography>
                                <Grid container direction="row"
                                    justifyContent="center"
                                >
                                    <Grid className={classes.center} justifyContent="center" xs={12} sm={6} md={6} lg={6}>
                                        <Typography variant='h5' className={classes.priceCntr}>
                                            {product.price.formatted} <span className={classes.price}>تومان</span>
                                        </Typography>
                                    </Grid>
                                    <Grid className={classes.center} xs={12} sm={6} md={6} lg={6} justifyContent="center">
                                        <Button variant='contained' style={{ background: '#00e676' }} onClick={() => onAddToCart(product.id, 1)} >اضافه کردن به سبد خرید</Button>
                                    </Grid>

                                </Grid>
                                <Typography className={classes.description}>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </main>
        </>
    )
}

export default ProductDetail