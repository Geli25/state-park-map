import * as actionTypes from '../actions/actionTypes';
// import stateUpdater from '../../utility/stateUpdater';

const initialState = {
    usingApp:false,
    focus: {
        lng: -80.49453737816452,
        lat: 35.49645434723877
    },
    zoom: [6],
    tabOpen:false,
    showAllMarkers:false,
    searchbarResult:null,
    currentPin:null
}


const reducer = (curState = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_APPSTATE:
            return{
                ...curState,
                usingApp:action.appState
            }
        case actionTypes.UPDATE_FOCUS:
            return {
                ...curState,
                focus:{
                    ...curState.focus,
                    lng:action.lng,
                    lat:action.lat
                }
            }
        case actionTypes.UPDATE_ZOOM:
            return {
                ...curState,
                zoom:[action.zoom]
            }
        case actionTypes.UPDATE_FOCUSZOOM:
            return{
                ...curState,
                zoom:[action.zoom],
                focus:{
                    ...curState.focus,
                    lng:action.lng,
                    lat:action.lat
                }
            }
        case actionTypes.TOGGLE_SHOWALL:
            return{
                ...curState,
                showAllMarkers:!curState.showAllMarkers
            }
        case actionTypes.TURNON_SHOWALL:
            return{
                ...curState,
                showAllMarkers:true
            }
        case actionTypes.UPDATE_TABOPEN:
            return{
                ...curState,
                tabOpen:action.tabOpen
            }
        case actionTypes.UPDATE_SEARCHBARRESULT:
            return{
                ...curState,
                searchbarResult:action.searchbarResult
            }
        case actionTypes.UPDATE_CURRENTPIN:
            return{
                ...curState,
                currentPin:action.pin
            }
        case actionTypes.RESTORE_MAPCONFIG:
            return{
                ...curState,
                focus: {
                    lng: -80.49453737816452,
                    lat: 35.49645434723877
                },
                zoom: [6],
                tabOpen: false,
            }
        default:
            return curState;
    }
}

export default reducer;