import React, {useState, useEffect} from 'react'
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import {Link} from 'react-router-dom'

import FormInput from './CustomTextField'
import {commerce} from'../../lib/commerce'




const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries]=useState([])
    const [shippingCountry, setShippingCountry]=useState('')
    const [shippingDivisions, setShippingSubdivisions]=useState([])
    const [shippingDivision, setShippingSubdivision]=useState('')
    const [shippingOptions, setShippingOptions]=useState([])
    const [shippingOption, setShippingOption]=useState('')
    const methods = useForm();
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
    const subdivisions = Object.entries(shippingDivisions).map(([code, name]) => ({id: code, label: name}))
    const options = shippingOptions.map((so) => ({id: so.id, label: `${so.description} - (${so.price.formatted})`}))

    const fetchShippingCountries = async(checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }
    
    const fetchSubdivisions = async(countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async(checkoutTokenId, country, region=null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
        console.log(options)
        setShippingOptions(options);
        setShippingOption(options[0].id);
    }

    useEffect(() => {
        console.log(commerce.services)
       fetchShippingCountries(checkoutToken.id)
        
    }, [])

    useEffect (() => {
        if(shippingCountry)
            fetchSubdivisions(shippingCountry);  
    }, [shippingCountry])

    useEffect (() => {
        if(shippingDivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingDivision)
    }, [shippingDivision])
    return (
      <>
        <Typography variant="h6" gutterBottom>
          {" "}
          آدرس گیرنده{" "}
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => next({... data, shippingCountry, shippingDivision, shippingOption}))}>
            <Grid container spacing={3}>
              <FormInput required name="firstName" label="نام" />
              <FormInput required name="lastName" label="نام خانوادگی" />
              <FormInput required name="address1" label="آدرس" />
              <FormInput required name="email" label="ایمیل" />
              <FormInput required name="city" label="شهر" />
              <FormInput required name="zip" label="کد پستی" />
              <Grid item xs={12} sm={6}>
                <InputLabel>کشور</InputLabel>
                <Select
                  value={shippingCountry}
                  fullWidth
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>شهر</InputLabel>
                <Select
                  value={shippingDivision}
                  fullWidth
                  onChange={(e) => setShippingSubdivision(e.target.avlue)}
                >
                  {subdivisions.map((subdivision) => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>روش ارسال </InputLabel>
                <Select
                  value={shippingOption}
                  fullWidth
                  onChange={(e) => setShippingOption(e.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <br/>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button component={Link} to='/cart' variant='contained' style={{background: '#ffb74d'}}>بازگشت به سبد خرید</Button>
                    <Button type='submit' variant='contained' color='primary'>ادامه دادن</Button>
            </div>
          </form>
        </FormProvider>
      </>
    );
}

export default AddressForm;
