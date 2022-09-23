import React from 'react';
import {Grid,TextField, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({type,name,label,autofocus,handleChange,half,handleShowPassword,value}) => {
  return (
    <>
        <Grid item xs={12} sm={half ? 6 : 12} >
            <TextField 
                value={value}
                name={name}
                onChange={handleChange}
                required
                autoFocus={autofocus}
                label={label}
                type={type}
                variant="outlined"
                fullWidth
                InputProps={
                    name==='password' ?{
                        endAdornment :(
                               <InputAdornment position='end' >
                                    <IconButton onClick={handleShowPassword} >
                                        {type==='text' ? <Visibility/> : <VisibilityOff/> }
                                    </IconButton>
                               </InputAdornment>
                        ),
                    }
                    :null
                }

            />

        </Grid>
    </>
  )
}

export default Input