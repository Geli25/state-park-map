import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';

import BackIcon from '@material-ui/icons/ArrowBack';

import MapDisplay from './MapDisplay';
import SearchBar from './Searchbar';

import { Button } from '@material-ui/core';

const MapPage = (props) => (
    <React.Fragment>
        <Button
            variant="contained"
            color="secondary"
            onClick={()=>props.updateAppState(false)}>
            <BackIcon />
            Go back
        </Button>
        <SearchBar />
        <MapDisplay />
    </React.Fragment>
)
const mapDispatchToProps = dispatch => ({
    updateAppState: (bool) => dispatch(actionCreators.updateAppState(bool))
})

export default connect(null, mapDispatchToProps)(MapPage);