import React,{useEffect, useState} from 'react';
import * as d3 from 'd3'
import * as topojson from 'topojson'


const Map = (props)=>{
    const {mapURL,dataURL,date,setDate,type,setType} = props;
    const [yesterday,setYesterday] = useState("")
    // hooks  -----------------------------------------------
    
    useEffect(()=>{
        setCaptions();
        loadButtons();
        loadTooltip();
        loadMapData(0.5);
    })

    useEffect(()=>{
        loadCaseData();
    },[date, type, yesterday])


    // components  ---------------------------------------------

    //sets the titles on the caption and subcaptions
    function setCaptions() {
        const element = d3.select(".coronaMap");
        element
            .select(".caption")
            .text("Daily update of covid cases at Virginia");
        element
            .select(".subcaption")
            .text("shows the number of death, hospitalization, and cases")
    }

    //addes a button to select the date for the specific day selected,
    //and another button to select the type of the data to display among
    //deaths, hospitaliziations, and total cases
    function loadButtons(){
        const dateButton = d3.select(".dateButton")
        const typeButton = d3.select(".typeButton")

        const types = ["deaths","hospitalizations","cases"]

        // handles date button
        getAvailableDates().then((availableDates)=>{
            dateButton
            .on("change", (event)=>{
                setDate(event.target.value)
                try{
                    setYesterday(event.target[event.target.selectedIndex + 1].value)
                }
                catch(e){
                    setYesterday("")
                    console.log("first data")
                }
            })
            .selectAll("option")
            .data(availableDates)
            .enter()
            .append("option")
            .text((value, key)=>{
                return value
            })

            setDate(availableDates[0])
            setYesterday(availableDates[1])
        })

        // handles type button
        typeButton
        .on("change",(event)=>{
            props.setType(event.target.value)
        })
        .selectAll("option")
        .data(types)
        .enter()
        .append("option")
        .attr("value", (value,key)=>{
            return value;
        })
        .text((value,key)=>{
            return value;
        })

        setType(types[0])
    }


    //sets property for the tooltip
    function loadTooltip(){
        d3
        .select(".tooltip")
        .style("visibility","hidden")
        .style("position", "absolute")
        .style("background-color","white")
        .style("padding", "2px")
        .style("border","thin solid black")
    }

    //using the url, loads the map data and display
    function loadMapData(scale){
        const [width,height] = [1920, 1080];

        let projection = d3
        .geoMercator()
        .scale(20000 * scale)
        .translate([0, 0]);

        let countyPath = d3
        .geoPath()
        .projection(projection);

        let svg = d3
        .select("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height);

        d3.json(mapURL).then((mapData)=>{
            let state = topojson.feature(mapData, mapData.objects.cb_2015_virginia_county_20m);
            let bounds = countyPath.bounds(state);

            projection.translate([width / 2 - (bounds[0][0] + bounds[1][0]) / 2,height / 2 - (bounds[0][1] + bounds[1][1]) / 2]);
            
            let tooltip = d3.select(".tooltip")

            svg
            .selectAll("path")
            .data(state.features)
            .enter()
            .append("path")
            .classed("county", true)
            .attr("id", county =>{
                return county.properties.GEOID
            })
            .attr("name", county =>{
                return county.properties.NAME
            }
            )
            .attr("fill", "grey")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            .style("stroke-linecap", "round")
            .style("stroke-linejoin","round")
            .attr("value", 0)
            .attr("d", countyPath)
            .on("click", (event) =>{
                console.log(event)
            })
            .on("mouseover", (event) => {
                //sets design when mouse hovers
                d3.select(event.target)
                .style("opacity", "0.5")
                .style("stroke-width", "2px")
                
                var value = event.target.getAttribute("value");
                tooltip.text(`${event.target.getAttribute("name")}, ${value}`);
                return tooltip.style("visibility", "visible");
            })
            .on("mousemove", (event) => {
                return tooltip
                .style("top", (event.pageY + 10) + "px")
                .style("left",(event.pageX + 10) + "px");
            })
            .on("mouseout", (event) => {
                //converts the design back when mouse outs
                d3.select(event.target)
                .style("opacity", "1")
                .style("stroke-width", "1px")

                tooltip.text("");
                return tooltip.style("visibility", "hidden");
            });
        })
    }

    //adds the associated colors to the map based on the
    //selected button options
    function loadCaseData(){
        d3.json(dataURL).then((coronaDatas)=>{
            
            const currentData = coronaDatas.filter((data)=>{
                return data.report_date === date
            })
            const yesterdayData = coronaDatas.filter((data)=>{
                return data.report_date === yesterday
            })
            
            let max = type === "deaths"? 5: type === "hospitalizations"? 5: type === "cases"? 50 : null;
            
            console.log(currentData, yesterdayData)

            //updated values from the day before
            //daily updated values
            currentData.map((data, index)=>{
                let value;
                let currentCounty = d3
                                    .select("svg")
                                    .select('[id = "' + data.fips + '"]')

                //parse data based on the type
                try{
                    if(type === "deaths"){
                        if(yesterdayData[index] === undefined){
                            value = parseInt(data.deaths)
                        }else{
                            value = data.deaths - yesterdayData[index].deaths
                        }
                    }
                    else if(type === "hospitalizations"){
                        if(yesterdayData[index] === undefined){
                            value = parseInt(data.hospitalizations)
                        }
                        else{
                            value = data.hospitalizations - yesterdayData[index].hospitalizations
                        }
                    }
                    else if(type === "cases"){
                        if(yesterdayData[index] === undefined){
                            value = parseInt(data.total_cases)
                        }
                        else{
                            value = data.total_cases - yesterdayData[index].total_cases
                        }
                    }
                    else{
                        console.log("wrong type")
                    }
                    
                    //set value on tooltip
                    currentCounty
                    .attr("value", `${type}: ${value}`)
                }
                catch(e){
                    console.log("data is not loaded yet")
                }

                //set color of each county
                currentCounty
                .attr("fill", ()=>{
                    return d3
                            .scaleLinear()
                            .domain([-1, 0, max/2, max])
                            .range(['black', "green", "yellow", "red"])
                            .interpolate(d3.interpolateRgb)(value);
                })
            })
        })
    }


    //gets all the available dates from the source url
    function getAvailableDates(){
        return d3.json(dataURL).then((data)=>{
            return [...new Set(data.map((each)=>{
                return  each.report_date
            }))]
        })
    }

    // return   --------------------------------------------------
    //basic structure of the components.
    return(
        <div className = "coronaMap" style={{textAlign:"center"}}>
            <h2 className ="caption">
                where caption will be
            </h2>
            <p className = "subcaption">
                where subcaption will be
            </p>
            <select className = "dateButton map"></select>
            <select className = "typeButton map"></select>
            <svg></svg>
            <div className = "tooltip"></div>
        </div>
    );
}

export default Map;