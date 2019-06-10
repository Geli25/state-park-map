import React, {Component} from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/mapConfig';

import Downshift from 'downshift';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import ncStateParks from '../dataSet/ncStateParks';

class SearchBar extends Component{
    state={
        options:[]
    }
    componentWillMount() {
        ncStateParks.map(park=>{
            // console.log(park.name);
            this.setState(prevState=>({
                ...prevState,
                options:[
                    ...prevState.options,
                    {value:park.name}
                ]
            }))
        })
    }

    render(){
        return(
            <Downshift
                onChange={selection => {
                    this.props.updateCurrentPin(selection.value);
                    this.props.selectResult(selection.value)}}
                itemToString={item => (item ? item.value : '')}
            >
                {({
                    getInputProps,
                    getItemProps,
                    getLabelProps,
                    getMenuProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                }) => (
                        <div style={{
                            width:"35%",
                            marginLeft:"35%",
                            marginTop: 10
                            }}>
                            <TextField
                                style={{
                                    width:"100%",
                                    backgroundColor:"white"
                                }}
                                variant="outlined"
                                onClick={()=>this.props.turnOnShowAll()}
                                label="Park Name"
                                placeholder="Search for a park name here"
                                InputLabelProps={getLabelProps()}
                                InputProps={getInputProps()} />
                            <Paper {...getMenuProps()} 
                                style={{
                                    width:"35%",
                                    fontSize:20,
                                    position: "fixed",
                                    zIndex: 10,
                                    overflow: 'auto',
                                    maxHeight: '35%'
                                }}>
                                {isOpen
                                    ? this.state.options
                                        .filter(item => !inputValue || item.value.toLowerCase().startsWith(inputValue.toLowerCase()))
                                        .map((item, index) => (
                                            <List
                                                {...getItemProps({
                                                    key: item.value,
                                                    index,
                                                    item,
                                                    style: {
                                                        backgroundColor: 'white',
                                                        padding:10,
                                                    },
                                                })}
                                            >
                                                {item.value}
                                            </List>
                                        ))
                                    : null}
                            </Paper>
                        </div>
                    )}
            </Downshift>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    selectResult: (result) => dispatch(actionCreators.updateSearchBarResult(result)),
    updateCurrentPin:(pin)=>dispatch(actionCreators.updateCurrentPin(pin)),
    turnOnShowAll:()=>dispatch(actionCreators.turnOnShowall())
})

export default connect(null,mapDispatchToProps)(SearchBar);