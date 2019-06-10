import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';

import BackIcon from '@material-ui/icons/ArrowBack';

import MapDisplay from './MapDisplay';
import SearchBar from './Searchbar';

import { Button } from '@material-ui/core';

const MapPage = (props) => (
    <div style={{
        height:"100%",
        width:"100%",
        backgroundColor:"#d9dbdd",
        margin:0,
        position:"absolute",
    }}>
        <Button
            style={{
                marginLeft:10,
                marginTop:10,
                position:"fixed",
                zIndex:20
            }}
            variant="contained"
            color="secondary"
            onClick={()=>props.updateAppState(false)}>
            <BackIcon />
            Go back
        </Button>
        <SearchBar />
        <MapDisplay />
    </div>
)
const mapDispatchToProps = dispatch => ({
    updateAppState: (bool) => dispatch(actionCreators.updateAppState(bool))
})

export default connect(null, mapDispatchToProps)(MapPage);