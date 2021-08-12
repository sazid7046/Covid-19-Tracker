import React from 'react';
import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';
import './LeftSide.css';
import "leaflet/dist/leaflet.css";
import {prettyPrintStat} from './util';
import numeral from 'numeral';


function LeftSide({countries, onCountryChange, country, countryInfo, mapCenter,mapZoom, mapCountry,
  setCasesType, casesType}) {
  return (
    <div className='leftSide'>
      <Header 
      countries={countries} 
      onCountryChange={onCountryChange}
      country = {country} />
      <div className='leftSide__Card'>
        <div className='leftSide__box1'>
          <InfoBox
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                isRed
                active={casesType === "cases"}
                cases={prettyPrintStat(countryInfo.todayCases)}
                total={numeral(countryInfo.cases).format("0.0a")}
              />
         </div>
        <div className='leftSide__box1'>
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
        </div>
        <div className='leftSide__box1'>
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
          </div>
      </div>
      
      <Map
      countries={countries}
      center={mapCenter}
      zoom={mapZoom}
      mapCountry={mapCountry}
      casesType={casesType}/>
    </div>
  )
}

export default LeftSide
