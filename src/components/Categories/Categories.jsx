import React from 'react'
import {Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core'

import useStyles from './styles'

const Categories = ({categories}) => {
   const classes =useStyles();
    console.log(categories)
    return (
      <main>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={category.assets[0].url}
                  title={category.name}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      {category.name}
                    </Typography>
                  </div>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: category.description }}
                    variant="body2"
                    color="textSecondary"
                  />
                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>
      </main>
    );
}

export default Categories
