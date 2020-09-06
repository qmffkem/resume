import React,{useState,useEffect} from 'react';
import Map from './Map';
import * as d3 from "d3";

const virginiaMapDataURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/VA-51-virginia-counties.json";
const coronaVirginiaDatasetURL = "https://data.virginia.gov/resource/bre9-aqqr.json";
const CovidCases = () => {
  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState("");
  const [coronaData, setCoronaData] = useState("");
  const [date,setDate] = useState("");
  const [type, setType] = useState("");

  useEffect(()=>{
    if(loading){
      //set loading be true after getting data
      d3.json(virginiaMapDataURL).then((mapData)=>{
        d3.json(coronaVirginiaDatasetURL).then((coronaData)=>{
          setMapData(mapData);
          setCoronaData(coronaData);
          setLoading(false);
        })
      });
    }
  },[loading]);

  return (
    <div>
      {
        !loading &&
        <Map
          mapData={mapData}
          coronaData = {coronaData}
          date ={date}
          setDate = {setDate}
          type = {type}
          setType = {setType}
          setLoading = {setLoading}
        />
      }
    </div>
  );
}

export default CovidCases;
