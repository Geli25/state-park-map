// import * as actionTypes from '../actions/actionTypes';
// import stateUpdater from '../../utility/stateUpdater';

const initialState = {
    focus: {
        lng: -80.49453737816452,
        lat: 35.49645434723877
    },
    zoom: [6],
    tabOpen:false
}


const reducer = (curState = initialState, action) => {
    // switch (action.type) {
    //     case actionTypes.UPDATE_IMAGE_PAIRS:
    //         return stateUpdater(curState, {
    //             imagePairs: action.imagePairs
    //         })
    //     case actionTypes.UPDATE_IMAGE_NAMES:
    //         return stateUpdater(curState, {
    //             imageNames: action.imageNames
    //         })
    //     case actionTypes.UPDATE_PROCESSING_TIME:
    //         return stateUpdater(curState, {
    //             processingTime: action.processingTime
    //         })
    //     case actionTypes.UPDATE_IMAGE_SIZES:
    //         return stateUpdater(curState, {
    //             imageSizes: action.imageSizes
    //         })
    //     case actionTypes.UPDATE_HISTOGRAMS:
    //         return stateUpdater(curState, {
    //             histograms: action.histograms
    //         })
    //     case actionTypes.UPDATE_UPLOAD_TIME:
    //         return stateUpdater(curState, {
    //             uploadTime: action.uploadTime
    //         })
    //     case actionTypes.CLEAR_RETURNED_DATA: {
    //         return {
    //             imagePairs: [],
    //             imageNames: [],
    //             processingTime: null,
    //             imageSizes: [],
    //             histograms: [],
    //             uploadTime: null
    //         };
    //     }
    //     default:
    //         return curState;
    // }
    return curState;
}

export default reducer;