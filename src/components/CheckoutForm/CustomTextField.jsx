import React from 'react'
import {
  TextField,
  Grid,
  MuiThemeProvider,
  createTheme,
} from "@material-ui/core";
import {useFormContext, Controller} from 'react-hook-form'

const theme = createTheme({
  direction: "rtl",
});

const FormInput = ({name, label, required}) => {
    const {control} = useFormContext()

    return (
      <Grid item xs={12} sm={6}>
        <Controller
          render={({ name }) => (
            <MuiThemeProvider theme={theme}>
              <TextField
                dir="rtl"
                {...name}
                label={label}
                required={required}
              />
            </MuiThemeProvider>
          )}
          as={TextField}
          control={control}
          fullWidth
          name={name}
          label={label}
          defaultValue=""
        />
      </Grid>
    );
}

export default FormInput
