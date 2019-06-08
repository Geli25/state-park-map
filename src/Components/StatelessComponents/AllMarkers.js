import React from 'react';
import OneMarker from '../OneMarker';
import ncStateParks from '../../dataSet/ncStateParks';

const AllMarkers=(props)=>{;
    return ncStateParks.map(marker=>(
        <OneMarker key={marker.name} markerData={marker}/>
    ))
}

export default AllMarkers;