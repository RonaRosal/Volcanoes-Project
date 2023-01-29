import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Button, Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";

//import pages
import CustomListDropDown from "../components/CustomListDropDown";
let Query = "japan";



export default function VolcanoListPage() {

   

    const navigate = useNavigate();
    const [rowData, setRowData] = useState([]);


    // Fetch Volcanoes
    const columns = [
        { headerName: "Id", field: "id", sortable: true, filter: true },
        { headerName: "Name", field: "name", sortable: true, filter: true },
        { headerName: "Country", field: "country", sortable: true, filter: true },
        { headerName: "Region", field: "region", sortable: true, filter: true },
        { headerName: "Subregion", field: "subregion", sortable: true, filter: true },
        { headerName: "Last Eruption", field: "last_eruption", sortable: true, filter: true },
        { headerName: "Summit", field: "summit", sortable: true, filter: true },
        { headerName: "Elevation", field: "elevation", sortable: true, filter: true },
        { headerName: "Longitude", field: "longitude", sortable: true, filter: true },
        { headerName: "Latitude", field: "latitude", sortable: true, filter: true },
        { headerName: "Population_5km", field: "population_5km", sortable: true, filter: true },
        { headerName: "Population_10km", field: "population_10km", sortable: true, filter: true },
        { headerName: "Population_30km", field: "population_30km", sortable: true, filter: true },
        { headerName: "Population_100km", field: "population_100km", sortable: true, filter: true },
    ];

    //Fetch volcanoes:FETCHED
    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${Query}`)
            .then((res1) => res1.json())
            //.then(cc => { console.log(cc); })
            .then(countries => setRowData(countries))
            .catch(err => console.log(err));
    }, []);


    return (
        <div className="container">

            <div
                className="ag-theme-balham"
                style={{
                    height: "700px",
                    width: "1200px"
                }}
            >
                <Button
                    color="info"
                    size="sm"
                    className="mt-3"
                    onClick={() => navigate("/")}
                >
                    Back
                </Button>

                <CustomListDropDown />
                

                <p> <Badge color="success"> {rowData.length}</Badge> volcanoes in japan </p>

                <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={25}
                    onRowClicked={(row) => navigate(`/pages/VolcanoInfoPage?name=${row.data.name}&id=${row.data.id}`)}
                />

               

            </div>
        </div>

    );



}