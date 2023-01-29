import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


//Fetch Countries: FETCHED
export const CustomDropdown = (props) => (
    <div className="form-group">
        
        <strong>{props.countryName}</strong>
        <select
            className="form-control"
            name="{props.countryName}"
            onChange={props.onChange}
        >
            <option defaultValue>Select Country {props.name}</option>
            {props.options.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
            </select>
            
    </div>
)

export default class CustomListDropDown extends React.Component
{
    constructor() {
        super()
        this.state = {
            countryList: [],
            value: '',
        }
    }
    componentDidMount() {
        fetch('http://sefdb02.qut.edu.au:3001/countries')
            .then((response) => response.json())
            .then((res) => this.setState({ countryList: res }))
    }

    onChange = (event) => {
        this.setState({ value: event.target.value })      
    }

    render() {
        return (
            <div className="container mt-4">
                
                <form>
                    

                <h2> Choose a country to view the list of volcanoes</h2>
                    <CustomDropdown
                        name={this.state.username}
                        options={this.state.countryList}
                        onChange={this.onChange}
                    />

                 </form>
            </div>
        )
    }
}