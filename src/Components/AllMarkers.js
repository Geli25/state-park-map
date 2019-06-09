import React from 'react';
import OneMarker from './OneMarker';
import ncStateParks from '../dataSet/ncStateParks';

import {connect} from 'react-redux';

const AllMarkers=(props)=>{
    return ncStateParks.map(marker=>{
        if (props.showAll){
            return <OneMarker key={marker.name} markerData={marker} />
        }
        else if ((!props.showAll&&marker.zoomLevel<props.zoom)||props.currentPin===marker.name){
            console.log(props.currentPin === marker.name);
            return <OneMarker key={marker.name} markerData={marker} />
        }
        else {
            return null;
        }
    })   
}

const mapStateToProps = reduxState => ({
    zoom: reduxState.mapConfig.zoom,
    showAll: reduxState.mapConfig.showAllMarkers,
    currentPin:reduxState.mapConfig.currentPin
})

export default connect(mapStateToProps)(AllMarkers);