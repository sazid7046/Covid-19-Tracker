import React from 'react';
import Table from './Table';
import Chart from './Chart'
import { Card, CardContent, Typography } from '@material-ui/core';
import './RighSide.css'

function RighSide({countries, casesType}) {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant='h6'>Lives Cases by Country</Typography>
          <Table countries={countries}/>
          <Typography variant='h6' gutterBottom className='title'>worldwide new cases</Typography>
          <Chart casesType={casesType}/>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default RighSide
