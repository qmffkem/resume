import React, { useEffect, useState } from 'react';
import * as d3 from "d3";

const Chart = (props) => {
    const [width, height] = [512, 288];
    const { coronaData, county, type } = props;
    const [max, setMax] = useState(1000)
    // hooks  -----------------------------------------------

    //similar to componentdidMount, as it does not run except the initial render.
    useEffect(() => {
        setCaptions();
        loadplane();
    }, []);

    useEffect(() => {
        loadaxis();
        updateData();
    }, [county, max, type]);

    // components  ---------------------------------------------


    //sets the titles on the caption and subcaptions
    function setCaptions() {
        const element = d3.select(".coronaChart");
        element
            .select(".caption")
            .text("Changes of the COVID cases at Virginia");
        element
            .select(".subcaption")
            .text("Shows the daily changes of the number of the covid cases")
    }

    // Creates the chart.
    // Adapted from https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89
    function loadplane() {

        d3.select(".chart-wrapper")
            .style("padding", "4em")

        // Add the svg element to the HVChart.
        d3.select("#chart")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .style("overflow", "visible")
            .append("g")

    }

    function loadaxis() {
        var chart = d3.select("#chart")

        var svg = chart
            .select("g")

        svg.selectAll("*")
            .remove();

        var uniqueDataLength = getDataLength();

        // X scale will use the quarter data.
        var xScale = d3.scaleLinear()
            .domain([0, uniqueDataLength - 1]) // input
            .range([width, 0]); // output

        // Y scale will use the percentage data
        var yScale = d3.scaleLinear()
            .domain([0, Math.ceil(max / 10) * 10]) // input
            .range([height, 0]); // output


        // An array of objects of length n (umber fo quarters).
        // Each object has key -> value pair, the key being "y" and the value is percentage data.
        // var dataset = d3.range(n).map(function(d) { return {"y": 100 * d3.randomUniform(1)() } })

        // Call (generate) the x axis in a group tag.
        svg.append("g")
            .attr("class", "xaxis")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale).tickValues(d3.range(0, uniqueDataLength, 1))); // Create an axis component with d3.axisBottom and selected values.

        // Call (generate) the y axis in a group tag.
        svg.append("g")
            .attr("class", "yaxis")
            .attr("transform", `translate(${width}, 0)`)
            .call(d3.axisRight(yScale).tickValues(d3.range(0, Math.ceil(max / 10) * 11, Math.ceil(max / 10)))); // Create an axis component with d3.axisLeft

        svg
            .select(".xaxis")
            .selectAll("text")
            .text((index) => {
                const [year, month, date, time] = getAvailableDates()[index].split(/-|T/);
                return (`${month}/${date}/${year}`)
            })
        // .style("transform", "rotate(10deg)")

        // Set the labels for y values.
        svg
            .select(".yaxis")
            .selectAll("text")
            .text((t) => {
                return t
            });
    }

    function updateData() {

        //remove any pre-existing data from the previous click
        d3.select(".line")
            .remove();

        var countyData = coronaData.filter((each) => {
            return each.fips === county;
        })

        var data = [...(countyData.map((each, index) => {
            if (type === "deaths") {
                return each.deaths;
            }
            else if (type === "hospitalizations") {
                return each.hospitalizations;
            }
            else if (type === "cases") {
                return each.total_cases;
            }
            else {
                return null;
            }
        }))]

        setMax(data[0])

        var uniqueDataLength = getDataLength();

        // X scale will use the quarter data.
        var xScale = d3.scaleLinear()
            .domain([0, uniqueDataLength - 1]) // input
            .range([width, 0]); // output
        // Y scale will use the percentage data
        var yScale = d3.scaleLinear()
            .domain([0, Math.ceil(max / 10) * 10]) // input
            .range([height, 0]); // output

        // Create d3's line generator.
        var line = d3.line()
            .x((data, index) => {
                // console.log(xScale(data))
                return xScale(index);
            }) // set the x values for the line generator
            .y((data, index) => {
                return yScale(data);
            }); // set the y values for the line generator

        d3.select(".coronaChart")
            .select("g")
            .append("path")
            .datum(data)
            .classed("line", true)
            .attr("d", line)
            .style("fill", "none")
            .style("stroke-width", 2)
            .style("stroke", "ffab00");
    }

    // helper ---------------------------------------------------

    //gets all the available dates from the source url
    function getAvailableDates() {
        return [...new Set(coronaData.map((each) => {
            return each.report_date
        }))]
    }

    function getDataLength() {
        return [...new Set(coronaData.map((each) => {
            return each.report_date
        }))].length;
    }

    // return   --------------------------------------------------
    //basic structure of the components.
    return (
        <div className="coronaChart" style={{ textAlign: "center"}}>
            <h2 className="caption">
                where caption will be
            </h2>
            <p className="subcaption">
                where subcaption will be
            </p>
            <div className="chart-wrapper">
                <svg id="chart"></svg>
            </div>
            {/* <div className = "slider"></div> */}
            <div className="tooltip"></div>
        </div>
    )
}

export default Chart;