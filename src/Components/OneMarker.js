import React,{Component} from 'react';
import  {Marker, Popup} from "react-mapbox-gl";
import MapMarker from '../UI/MapMarker';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';


class OneMarker extends Component{
    state={
        open:false
    }

    openTab=()=>{
        this.setState({ open: true });
        this.props.updateTabOpen(true);
        this.props.updateZoom(11);
        this.props.updateFocus(this.props.markerData.lngLat[0],this.props.markerData.lngLat[1]);
    }

    componentDidUpdate(){
        //makes sure that only one tab is open at a time
        if (!this.props.tabOpen&&this.state.open){
            this.setState({open:false})
        }
    }

    render(){
        return(
        <React.Fragment>
            <Marker
                style={{ zIndex:0}}
                coordinates={this.props.markerData.lngLat}
                onClick={()=>this.openTab()}>
                <MapMarker />
            </Marker>
            {this.state.open && this.props.tabOpen 
            ? <Popup
                style={{zIndex:1}}
                coordinates={this.props.markerData.lngLat}
                onClick={()=>this.setState({open:false})}>
                <h2>{this.props.markerData.name}</h2>
                <p>Address: {this.props.markerData.address}</p>
                <p>Opening Hours: {this.props.markerData.hours}</p>
                <h3
                style={{ textAlign: "center" }}>
                            <a href={this.props.markerData.website} target="_blank" rel="noopener noreferrer">
                    Visit website
                </a>
                </h3>
            </Popup> : null}
        </React.Fragment>
    )}
}

const mapStateToProps = reduxState => ({
    zoom:reduxState.mapConfig.zoom,
    tabOpen: reduxState.mapConfig.tabOpen
})
const mapDispatchToProps = dispatch => ({
    updateTabOpen:(bool)=>dispatch(actionCreators.updateTabOpen(bool)),
    updateZoom:(zoom)=>dispatch(actionCreators.updateZoom(zoom)),
    updateFocus: (lng,lat) => dispatch(actionCreators.updateFocus(lng,lat)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OneMarker);