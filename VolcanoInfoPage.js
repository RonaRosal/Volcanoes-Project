
import { Button } from "reactstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { Map, Marker } from 'pigeon-maps'
//import { osm } from 'pigeon-maps/providers'

import LogInPage from "./LogInPage";


import { Doughnut } from 'react-chartjs-2';



export default function volcanoInfo() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const longitude = searchParams.get("longitude");
    const latitude = searchParams.get("latitude");


    const [volcanoData, setVolcanoData] = useState();
 

    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`

  
    const fetchData = () => {
        const url = `http://sefdb02.qut.edu.au:3001/volcano/${id}`;
        const token = localStorage.getItem("token");
        const headers = {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        };
        fetch(url, { headers })
            .then(res => res.json())
            .then(res => setVolcanoData(res))
    };

    return (
        <div className="container">
            <Button
                color="info"
                size="sm"
                className="mt-3"
                onClick={() => navigate("/pages/VolcanoListPage")}
            >
                Back
            </Button>


           
            <form>
                <ul>
                    <h1> {name}</h1>
                <p> Welcome! Lets get to know more about {name} </p>
                <div> {JSON.stringify(volcanoData)}</div>

                </ul>
                <Map height={300} defaultCenter={[34.5000, 131.6000]} defaultZoom={11}>
                    <Marker
                        width={50}
                        anchor={[34.5000, 131.6000]}
                        color={color}
                        onClick={() => setHue(hue + 20)}
                    />
                </Map>

                
            </form>

          
            <button onClick={fetchData}>Fetch Data</button>
            
        </div>
    );
}
