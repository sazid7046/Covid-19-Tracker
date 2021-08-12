import React from 'react';
import { MenuItem, Select, Typography } from '@material-ui/core';
import './Header.css'

function Header({countries, onCountryChange, country}) {
  return (
    <React.Fragment>
      <div className='header'>
        <Typography variant='h5'>Covid-19 Tracker</Typography>
      <Select variant='outlined' onChange={onCountryChange} value={country}>
        <MenuItem value='worldwide'>worldwide</MenuItem>
        {countries.map(country => {
         return <MenuItem value={country.value}>{country.name}</MenuItem>
        })}
      </Select>
      </div>
      
    </React.Fragment>
  )
}

export default Header
