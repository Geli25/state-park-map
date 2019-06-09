import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import AllMarkers from './AllMarkers';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';
import Button from '@material-ui/core/Button';
import ToggleShowAll from './ToggleShowAll';


const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ2VsaWwiLCJhIjoiY2p3bWc5dWw4MDNiMTN6bjNoNDI1dHcwMiJ9.f1aYClXSRsY1okAwRkHjsA"
});

const MapDisplay=(props)=>{
    //shouldComponentUpdate on toggling tab open and showall
    return(
        <React.Fragment>
        <ToggleShowAll styles={{
            display: 'flex', 
            justifyContent: 'center',
        }} />
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: "80vh",
                width: "80vw",
                margin:"auto",
                zIndex:0
            }}
            zoom={props.zoom}
            center={[props.focus.lng, props.focus.lat]}
            onZoomEnd={(map)=>{
                console.log(map.getZoom(),map.getCenter());
                props.updateFocusZoom(map.getZoom(), map.getCenter().lng, map.getCenter().lat);
            }}
            onClick={(_, events) => {
                console.log(events.lngLat);
                props.updateFocus(events.lngLat.lng, events.lngLat.lat);
                props.updateTabOpen(false);
            }}>
            <AllMarkers />
        <Button
            style={{
                height:"10%",
                width:"30%",
                position:"absolute",
                bottom:1,
                left:"35%",
                zIndex: 2,
                fontWeight:"bold",
                fontSize:18
            }}
            color="primary"
            variant="contained"
            disabled={props.focus.lng === -80.49453737816452 && props.focus.lat === 35.49645434723877}
            onClick={props.restoreMapConfig}>
            Center
        </Button>
        </Map>
        </React.Fragment>
        )
    }

const mapStateToProps=reduxState=>({
    focus:reduxState.mapConfig.focus,
    zoom:reduxState.mapConfig.zoom
})
const mapDispatchToProps=dispatch=>({
    updateFocusZoom:(zoom, lng,lat)=>dispatch(actionCreators.updateFocusZoom(zoom, lng,lat)),
    updateFocus: (lng, lat) => dispatch(actionCreators.updateFocus(lng, lat)),
    updateTabOpen: (bool) => dispatch(actionCreators.updateTabOpen(bool)),
    restoreMapConfig:()=>dispatch(actionCreators.restoreMapConfig())
})

export default connect(mapStateToProps,mapDispatchToProps)(MapDisplay);