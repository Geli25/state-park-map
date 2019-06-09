import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ncStateParks from '../dataSet/ncStateParks';

class SearchBar extends Component{
    state={
        open:false,
        options:[]
    }
    componentWillMount() {
        ncStateParks.map(park=>{
            // console.log(park.name);
            this.setState(prevState=>({
                ...prevState,
                options:[
                    ...prevState.options,
                    {label:park.name}
                ]
            }))
        })
    }
    render(){
        return(
            <TextField 
                style={{
                    width:"30%",
                    marginLeft:"35%",
                    marginTop:10
                }}
                variant="outlined"
                placeholder="Search for a park name here" />
        )
    }
}

export default SearchBar;