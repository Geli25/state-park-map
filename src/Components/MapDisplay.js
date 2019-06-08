import React, {Component} from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import AllMarkers from './StatelessComponents/AllMarkers';

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiZ2VsaWwiLCJhIjoiY2p3bWc5dWw4MDNiMTN6bjNoNDI1dHcwMiJ9.f1aYClXSRsY1okAwRkHjsA"
});

class MapDisplay extends Component{
    state={
        focus:{
            lng: -80.49453737816452,
            lat: 35.49645434723877
        },
        zoom:[6]
        //Handle focus and zoom stuff on Redux
    }

    render(){
    return(
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: "80vh",
                width: "80vw",
                paddingTop:40,
                margin:"auto"
            }}
            zoom={this.state.zoom}
            center={[this.state.focus.lng, this.state.focus.lat]}
            onZoomEnd={(map)=>{
                console.log(map.getZoom(),map.getCenter());
                this.setState((prevState) => ({
                    ...prevState,
                    zoom:[map.getZoom()],
                    focus: {
                        ...prevState.focus,
                        lng: map.getCenter().lng,
                        lat: map.getCenter().lat
                    }
                }))
            }}
            onClick={(_, events) => {
                console.log(events.lngLat);
                this.setState((prevState)=>({
                    ...prevState,
                    focus:{
                        ...prevState.focus,
                        lng:events.lngLat.lng,
                        lat:events.lngLat.lat
                    }
                }))
            }}>
            <AllMarkers />
        </Map>
        )
    }
}

export default MapDisplay;