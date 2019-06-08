import React,{Component} from 'react';
import  {Marker, Popup} from "react-mapbox-gl";
import MapMarker from '../UI/MapMarker';


class OneMarker extends Component{
    state={
        open:false
    }
    render(){
        return(
        <React.Fragment>
            <Marker
                coordinates={this.props.markerData.lngLat}
                onClick={()=>this.setState({open:true})}>
                <MapMarker />
            </Marker>
            {this.state.open ? <Popup
                coordinates={this.props.markerData.lngLat}
                onClick={()=>this.setState({open:false})}>
                <h2>{this.props.markerData.name}</h2>
                <p>Address: {this.props.markerData.address}</p>
                <p>Opening Hours: {this.props.markerData.hours}</p>
                <h3
                style={{ textAlign: "center" }}>
                    <a href={this.props.markerData.website} target="_blank">
                    Visit website
                </a>
                </h3>
            </Popup> : null}
        </React.Fragment>
    )}
}

export default OneMarker;