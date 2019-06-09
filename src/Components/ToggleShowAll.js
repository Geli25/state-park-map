import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const ToggleShowAll = (props) => (
    <FormControlLabel
        style={props.styles}
        control={
            <Switch
                checked={props.showAll}
                onChange={props.toggleShowAll} />
        }
        label="Always Show All Pins"
    />
)

const mapStateToProps = reduxState => ({
    showAll: reduxState.mapConfig.showAllMarkers
})

const mapDispatchtoProps = dispatch => ({
    toggleShowAll:()=>dispatch(actionCreators.toggleShowAll())
})

export default connect(mapStateToProps, mapDispatchtoProps)(ToggleShowAll);