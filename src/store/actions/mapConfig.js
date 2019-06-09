import * as actionTypes from './actionTypes';

export const updateFocus = (lng,lat) => ({
    type: actionTypes.UPDATE_FOCUS,
    lng: lng,
    lat: lat
})

export const updateZoom=(zoom)=>({
    type:actionTypes.UPDATE_ZOOM,
    zoom:zoom
})

export const updateFocusZoom=(zoom, lng, lat)=>({
    type:actionTypes.UPDATE_FOCUSZOOM,
    zoom:zoom,
    lng:lng,
    lat:lat
})

export const updateTabOpen=(bool)=>({
    type:actionTypes.UPDATE_TABOPEN,
    tabOpen:bool
})

export const toggleShowAll=()=>({
    type: actionTypes.TOGGLE_SHOWALL,
})

export const updateSearchBarResult=(result)=>({
    type:actionTypes.UPDATE_SEARCHBARRESULT,
    searchbarResult:result
})

export const restoreMapConfig=()=>({
    type:actionTypes.RESTORE_MAPCONFIG
})