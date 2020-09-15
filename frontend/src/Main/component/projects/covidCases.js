import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import Map from './Map';
import Chart from './Chart';

import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-Start",
    flexWrap: "wrap",
  },
  content: {
    margin: "1em",
    flexGrow:"1"
  }
}));

const virginiaMapDataURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/VA-51-virginia-counties.json";
const coronaVirginiaDatasetURL = "https://data.virginia.gov/resource/bre9-aqqr.json";
const CovidCases = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState("");
  const [coronaData, setCoronaData] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [county, setCounty] = useState("");


  useEffect(() => {
    if (loading) {
      d3.json(virginiaMapDataURL).then((mapData) => {
        d3.json(coronaVirginiaDatasetURL).then((coronaData) => {
          setMapData(mapData);
          setCoronaData(coronaData);
          setType("deaths");
          setCounty(mapData.objects.cb_2015_virginia_county_20m.geometries[0].properties.GEOID)
          setLoading(false);
        })
      });
    }
  }, [loading]);

  return (
    <div>
      {
        loading ? (
          <p>loading...</p>
        ) : (
            <div className={classes.root}>
              <Paper elevation={3} className={classes.content}>
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
              </Paper>
              <Paper elevation={3} className={classes.content}>
                <Chart
                  coronaData={coronaData}
                  county={county}
                  type={type}
                />
              </Paper>
            </div>
          )
      }
    </div>
  );
}

export default CovidCases;
