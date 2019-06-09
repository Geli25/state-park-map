import React from 'react';
import OneMarker from './OneMarker';
import ncStateParks from '../dataSet/ncStateParks';

import {connect} from 'react-redux';

const AllMarkers=(props)=>{
    return ncStateParks.map(marker=>{
        if (props.showAll){
            return <OneMarker key={marker.name} markerData={marker} />
        }
        else if (!props.showAll&&marker.zoomLevel<props.zoom){
            return <OneMarker key={marker.name} markerData={marker} />
        }
        else {
            return null;
        }
    })   
}

const mapStateToProps = reduxState => ({
    zoom: reduxState.mapConfig.zoom,
    showAll: reduxState.mapConfig.showAllMarkers
})

export default connect(mapStateToProps)(AllMarkers);