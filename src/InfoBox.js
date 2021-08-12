import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react';
import './InfoBox.css'

function InfoBox({title, isRed, active, cases, total, ...props}) {
  return (
    <React.Fragment>
      <div className='infoBox'>
      <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
      </div>
    </React.Fragment>
  )
}
export default InfoBox
