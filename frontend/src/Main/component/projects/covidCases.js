import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import Map from './Map';
import Chart from './Chart';

const virginiaMapDataURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/VA-51-virginia-counties.json";
const coronaVirginiaDatasetURL = "https://data.virginia.gov/resource/bre9-aqqr.json";
const CovidCases = () => {
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState("");
  const [coronaData, setCoronaData] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [county, setCounty] = useState("");


  useEffect(() => {
    if (loading) {
      //set loading be true after getting data
      // setTimeout(() => {
      d3.json(virginiaMapDataURL).then((mapData) => {
        d3.json(coronaVirginiaDatasetURL).then((coronaData) => {
          setMapData(mapData);
          // console.log("t")
          setCoronaData(coronaData);
          setType("deaths");
          // setTimeout(() => {
          //   console.log("a")
          setCounty(mapData.objects.cb_2015_virginia_county_20m.geometries[0].properties.GEOID)
          // }, 5000);
          // console.log("e")
          setLoading(false);
        })
      });
      // }, 5000)
    }
  }, [loading]);

  return (
    <div>
      {
        loading ? (
          <p>loading...</p>
        ) : (
            // <div style={{display:"flex", justifyContent:"center"}}>
            <div>
              {/* <p>done loading</p> */}
              <Map
                mapData={mapData}
                coronaData={coronaData}
                date={date}
                setDate={setDate}
                type={type}
                setType={setType}
                setLoading={setLoading}
                setCounty={setCounty}
              />
              <Chart
                coronaData={coronaData}
                county={county}
                type={type}
              />
            </div>
          )
      }
    </div>
  );
}

export default CovidCases;
