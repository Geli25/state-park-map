import React from 'react';
import { Button, Typography, CardMedia, Card } from '@material-ui/core';

import {connect} from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';

import ForwardIcon from '@material-ui/icons/ArrowForward';



const IntroPage = (props) => (
    <div style={{
        width: "100%",
        height: "100vh",
        position:"fixed",
        backgroundColor:"#d9dbdd"}}>

        <Card 
            style={{
            width:"80%",
            margin: "auto",
            textAlign:"center",
            marginTop:"5%",
            position:"relative"
        }}>

        <CardMedia
            component="img"
            alt="State Park Image"
            height="450"
            image={require("../Assets/background.jpg")} />
        <div style={{
                zIndex: 20,
                marginTop: "-55vh",
                marginLeft: "12vw",
                position: "fixed",
        }}>

        <Typography 
            style={{
                padding:10,
                fontSize:"4vw",
                color:"white",
                borderStyle: "solid",
                borderWidth: 6,
                borderColor: "white"
            }}
            variant="h3">
            North Carolina State Park Map
        </Typography>
        <Typography
            style={{
                marginTop:"2vh",
                fontSize: "2vw",
                color: "white",
            }}
            variant="body2" 
            component="p">
            Explore North Carolina interactively
        </Typography>
            <Button
                style={{
                    marginTop:"10vh"
                }}
                variant="contained"
                color="primary"
                onClick={()=>props.updateAppState(true)}>
                Get Started
                <ForwardIcon style={{
                    marginLeft:2
                }}/>
            </Button>
        </div>
        </Card>
    </div>
)

const mapDispatchToProps = dispatch => ({
    updateAppState: (bool)=>dispatch(actionCreators.updateAppState(bool))
})

export default connect(null, mapDispatchToProps)(IntroPage);