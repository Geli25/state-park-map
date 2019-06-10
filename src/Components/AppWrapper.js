import React from 'react';

import {connect} from 'react-redux';

import MapPage from './MapPage';
import IntroPage from './IntroPage';

const AppWrapper=(props)=>(
    <React.Fragment>
        {props.usingApp ? <MapPage /> : <IntroPage />}
    </React.Fragment>
)

const mapStateToProps = reduxState => ({
    usingApp: reduxState.mapConfig.usingApp
})

export default connect(mapStateToProps)(AppWrapper);