import React from 'react';
import "./Country.css"

const Country = (props) => {
    // console.log(props.country)
    const {name,population,area, flags} = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <img src={flags.png} alt="" /><br />
            <button className='btn btn-primary'>Details</button>
        </div>
    );
};

export default Country;