import React from 'react';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';

import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';


const IntroPage = (props) => (
    <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor:"#d9dbdd"}}>
        <Card style={{
            width:"80%",
            margin: "auto",
            textAlign:"center"
        }}>
            <h1>North Carolina State Park Map</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={()=>props.updateAppState(true)}>
                Get Started</Button>
        </Card>
    </div>
)

const mapDispatchToProps = dispatch => ({
    updateAppState: (bool)=>dispatch(actionCreators.updateAppState(bool))
})

export default connect(null, mapDispatchToProps)(IntroPage);