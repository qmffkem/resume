import React,{useState} from 'react';
import Map from './Map';

const VirginiaMapDataURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/VA-51-virginia-counties.json";
const coronaVirginiaDatasetURL = "https://data.virginia.gov/resource/bre9-aqqr.json";
const CovidCases = () => {
  const [date,setDate] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Map
          mapURL={VirginiaMapDataURL}
          dataURL = {coronaVirginiaDatasetURL}
          date ={date}
          setDate = {setDate}
          type = {type}
          setType = {setType}
        />
      </header>
    </div>
  );
}

export default CovidCases;
